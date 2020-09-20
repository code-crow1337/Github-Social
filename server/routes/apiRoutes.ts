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
      const response = await fetchdata(username);
      console.log(response);
      if(response.length === 0 || (/Not Found/ig).test(response)) return res.status(404).json({message:`${username} dosen't have any repos`}); 
      const userFormatedData = await formateData(response);
      res.status(200).json(userFormatedData);
    } catch (error) {
      next(error);
    }
  }
);

export default api;
