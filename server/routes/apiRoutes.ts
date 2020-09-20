import express from "express";
import readMockdata from "../utils";
import fetch, { Headers } from "node-fetch";
import { Follower } from "../../types";

const api = express.Router();
const url = 'https://api.github.com/users/';

const fetchdata = async (username: string) => {

  try {
    let temp:string; 
    process.env.NODE_ENV = 'production' ? temp = await fetchExternalData(username) : temp = await readMockdata("./mockdata/user.json") ;
    return JSON.stringify(temp);
  } catch (error) {
    throw new Error(`Failed fetching mock data: ${error.message}`);
  }
};
const fetchExternalData = async (username:string) => {
 
  try {
    const response = await fetch(
      `${url}${username}/repos`,
      {
        method: "GET",
        headers: new Headers({
          Authorization: `token ${process.env.PERSONAL_TOKEN}`,
        }),
      }
    );
    const userData = await response.json();

      return userData; 
  } catch (error) {
    throw new Error(
      `Error fetching the of usersname ${username}. Error: ${error}`
    );
  }
}
const fetchFollowers = async (username: string, type: string) => {
  try {
    const response = await fetch(
      `${url}${username}/${type}`,
      {
        method: "GET",
        headers: new Headers({
          Authorization: `token ${process.env.PERSONAL_TOKEN}`,
        }),
      }
    );
    const followers = await response.json();
    return followers.map((follower: any) => {
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
const getUserData = async (ownerData: any) => {
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
const formateData = async (responseData: string) => {
  const parsedObj = JSON.parse(responseData);
  const reposInfo = await Promise.all(
    parsedObj.map(async (obj: any) => {
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
api.get("/", (req, res) => {
  res.json("Welcome to the server side");
});
api.get(
  "/search/:username/",
  async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    const {
      params: { username },
    } = req;
    try {
      const response = await fetchdata(username);
      if(response.length === 0) return res.status(404).json({message:`${username} dosen't have any repos`}) 
      const userFormatedData = await formateData(response)
      res.status(200).json(userFormatedData);
    } catch (error) {
      next(error);
    }
  }
);

export default api;
