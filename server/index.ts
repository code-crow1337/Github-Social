import express from "express";
import router  from "./routes";
import * as dotenv from 'dotenv';

dotenv.config(); 

const server = express();

console.log(process.env.PORT);
const PORT:number = parseInt(process.env.PORT as string, 10);
server.use(router);

server.listen(PORT, () => console.log(`Listen on port: ${PORT} `));
