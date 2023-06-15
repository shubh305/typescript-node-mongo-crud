import dotenv from "dotenv";
import path from "path";

process.env.NODE_ENV = process.env.NODE_ENV || "development";
dotenv.config({ path: path.join(__dirname, `../../.env.${process.env.NODE_ENV}`) });
