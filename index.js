import dotenv from "dotenv";
dotenv.config( {path: "./config.env "});

import express from "express";
import connectMongoose from "./database/database.js";
import { router } from "./routes/routes.js";

import cookieParser from "cookie-parser";

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(router);

connectMongoose();

app.listen(process.env.PORT, (req, res) => {
    console.log(`Listening on the port ${process.env.PORT}.`);
});