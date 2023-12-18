import dotenv from "dotenv";
dotenv.config( {path: "./config.env "});

import express from "express";
import connectMongoose from "./database/database.js";
import { router } from "./routes/routes.js";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

import cookieParser from "cookie-parser";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(router);

// await connectMongoose();
async function connectToMongoose() {
    await connectMongoose();
}

connectToMongoose();

app.listen(process.env.PORT, (req, res) => {
    console.log(`Listening on the port ${process.env.PORT}.`);
});