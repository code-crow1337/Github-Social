import express, { NextFunction, Request, Response } from "express";
import api from "./apiRoutes";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Start page");
});
router.use("/api", api);
router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json('Woops internal Server Error!');
});
export default router;
