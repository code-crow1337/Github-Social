import express, { NextFunction, Request, Response } from "express";
import { TError } from "../../types";
import api from "./apiRoutes";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Start page");
});
router.use("/api", api);
router.use((err: TError, req: Request, res: Response, next: NextFunction) => {
  err.statusCode = err.statusCode || 500; 
  err.status = err.status || 'Woops internal Server Error!';
  console.error('stack', err.stack);
  console.log('expres error handler', err.statusCode);
  res.status(err.statusCode).json({status:err.status, message:err.message});
});
export default router;
