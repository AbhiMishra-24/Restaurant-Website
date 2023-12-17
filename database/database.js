import dotenv from "dotenv";
dotenv.config({ path: "./config.env" });

import mongoose from "mongoose";

function connectMongoose() {
    mongoose
    .connect(process.env.DATABASE)
    .then((e) => console.log(`Connected to mongoDB: ${e.connection.host}`))
    .catch(e => console.log(e));
}

export {connectMongoose};

export default connectMongoose;