import { config } from "dotenv";
config();

export const PORT =  3000;
export const HOST = "http://localhost:" + PORT;

export const SECRET_JWT = "LaRePeli";
export const MONGODB_URI ="mongodb://localhost:27017/LaRePeli";
