import dotenv from "dotenv";
dotenv.config({ path: "./config.env" });

import mongoose from "mongoose";

async function connectMongoose() {
    const response = await mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    console.log(`Connected to mongoDB Atlas on ${response.connection.host}`);
}

export {connectMongoose};

export default connectMongoose;