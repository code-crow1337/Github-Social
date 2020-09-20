export let timeout: ReturnType<typeof setTimeout>;

export type userDataType= {
  repos: Repo[],
  userInfo: User
}
export type Follower ={
  username:string,
  avatar_url:string,
  html_url:string,
}
export type User = {
  login:string,
  avatar_url:string,
  html_url:string,
  followers: Follower[]
  following: Follower[]
} 
export type Repo = {
  name:string,
  url:string,
  description: string,
  languages?: {},
  created:string,
  latest_update:string,
  clone_url:string,
}