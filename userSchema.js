import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    mobileNumber: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    tokens: [
        {
            token: {
                type: String
            }
        }
    ]
});

// Hashing the password.

userSchema.pre("save", async function(next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 12);
    }
    next();
})

// generating jwt token.
userSchema.methods.generateAuthToken = async function() {
    try {

        let token = jwt.sign({_id: this._id}, process.env.TOKEN_SCRECT_KEY);
        this.tokens = this.tokens.concat({ token : token });
        await this.save();
        return token;

    } catch (error) {
        console.log("While Generating Token", error);
    }
}



const User = mongoose.model("user", userSchema);

export { User };