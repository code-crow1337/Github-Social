import { readFile } from "fs";
import { promisify } from "util";
import fetch, { Headers } from "node-fetch";
import { Follower, User, Repo,UserDataType } from "../../types";


const url = 'https://api.github.com/users/';

const readFilePromise = promisify(readFile);
const readMockdata = async (path: string) => {
  try {
    return await readFilePromise(path, "utf8");
  } catch (error) {
    throw new Error(error.message);
  }
};

const fetchdata = async (username: string):Promise<string> => {
  try {
    let temp: string;
    process.env.NODE_ENV = "production"
      ? (temp = await fetchExternalData(username))
      : (temp = await readMockdata("./mockdata/user.json"));
    return JSON.stringify(temp);
  } catch (error) {
    throw new Error(`Failed fetching mock data: ${error.message}`);
  }
};
const fetchExternalData = async (username: string) => {
  try {
    const response = await fetch(`${url}${username}/repos`, {
      method: "GET",
      headers: new Headers({
        Authorization: `token ${process.env.PERSONAL_TOKEN}`,
      }),
    });
    const userData = await response.json();

    return userData;
  } catch (error) {
    throw new Error(
      `Error fetching the of usersname ${username}. Error: ${error}`
    );
  }
};
const fetchFollowers = async (username: string, type: string) => {
  try {
    const response = await fetch(`${url}${username}/${type}`, {
      method: "GET",
      headers: new Headers({
        Authorization: `token ${process.env.PERSONAL_TOKEN}`,
      }),
    });
    const followers = await response.json();
    return followers.map((follower: Follower) => {
      return {
        username: follower.login,
        avatar_url: follower.avatar_url,
        html_url: follower.html_url,
      };
    });
  } catch (error) {
    throw new Error(
      `Error fetching the ${type} of usersname ${username}. Error: ${error}`
    );
  }
};

const fetchLanguage = async (url: string) => {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: new Headers({
        Authorization: `token ${process.env.PERSONAL_TOKEN}`,
      }),
    });
    const languages = await response.json();
    return languages;
  } catch (error) {
    throw new Error(
      `Error fetching the language for a specfic repo. URL:${url}. Error: ${error}`
    );
  }
};
const getUserData = async (ownerData: User):Promise<User> => {
  const { login, avatar_url, html_url } = ownerData;
  let followers: Follower[] = [];
  let following: Follower[] = [];

  try {
    followers = await fetchFollowers(login, "followers");
    following = await fetchFollowers(login, "following");
  } catch (error) {
    throw new Error(`Error fetching user specific data: ${error}`);
  }
  return {
    login,
    avatar_url,
    html_url,
    followers,
    following,
  };
};
const formateData = async (responseData: string):Promise<UserDataType> => {
  const parsedObj = JSON.parse(responseData);
  const reposInfo = await Promise.all(
    parsedObj.map(async (obj: Repo) => {
      const languages = await fetchLanguage(obj.languages_url);
      return {
        name: obj.name,
        url: obj.html_url,
        description: obj.description,
        languages,
        created: obj.created_at,
        latest_update: obj.updated_at,
        clone_url: obj.clone_url,
      };
    })
  );
  const userSpecifcData = await getUserData(parsedObj[0].owner);
  return {
    userInfo: userSpecifcData,
    repos: reposInfo,
  };
};
export {
  formateData,
  fetchdata,
};
