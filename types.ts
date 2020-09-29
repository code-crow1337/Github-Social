export let timeout: ReturnType<typeof setTimeout>;

export type UserDataType = {
  repos: Repo[];
  userInfo: User;
};

export type Follower = {
  username?: string;
  login?: string;
  avatar_url: string;
  html_url: string;
};
export type User = {
  login: string;
  avatar_url: string;
  html_url: string;
  followers: Follower[];
  following: Follower[];
};
export type Repo = {
  name: string;
  url: string;
  html_url?: string;
  created_at?: string;
  updated_at?: string;
  description: string;
  languages_url?: any;
  languages?: {};
  created: string;
  latest_update: string;
  clone_url: string;
};
export interface TError extends Error{
  statusCode:number;
  status:string;
}
