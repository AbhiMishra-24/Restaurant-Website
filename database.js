import mongoose from "mongoose";

function connectMongoose() {
    mongoose
    .connect("mongodb://127.0.0.1:27017/restaurantDB")
    .then((e) => console.log(`Connected to mongoDB: ${e.connection.host}`))
    .catch(e => console.log(e));
}   

const userSchema = new mongoose.Schema({
    name: String,
    username: {
        type: String,
        required: true,
        unique: true
    },
    mobileNumber: Number,
    password: String
});

const User = mongoose.model("user", userSchema);

export {connectMongoose, User};