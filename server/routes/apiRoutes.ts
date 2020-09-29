import express from "express";
import {
  formateData,
  fetchdata,
  } from "../utils";


const api = express.Router();

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

      const response:string | any = await fetchdata(username);

      if(response.length === 0 || (/message/ig).test(response)) {
  /*       const message = (/message/ig).test(response) ? JSON.parse(response).message : `${username} dosen't have any repos`;
        return res.status(404).json({message:message});  */
        throw response;
      }
      const userFormatedData = await formateData(response);
      res.status(200).json(userFormatedData); 
    } catch (error) {
      next(error); 
    }
  }
);

export default api;
