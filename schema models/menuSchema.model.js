import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const menuSchema = new mongoose.Schema({
    category: {
        type: String
    },
    content: {
        url: {
            type: String
        },
        items: [String]
    }
});


const Menu = mongoose.model("menu", menuSchema);

export { Menu };