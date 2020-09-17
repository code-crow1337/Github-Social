import express from "express";
import api from './apiRoutes'
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Start page");
});
router.use('/api',api);

export default router; 
