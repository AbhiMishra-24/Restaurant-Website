import express from "express";
import { Router } from "express";

import { User } from "./userSchema.js";

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const router = Router();

router.get("/", (req, res) => {
    if (req.cookies.user){
        res.redirect("/home");
    } else {
        res.render("index");
    }
});

router.route("/joinus")
    .get((req, res) => {
        res.render("joinus");
    });


router.route("/signup")
    .get((req, res) => {
        if (req.cookies.user){
            res.redirect("/home");
        } else {
            res.render("signup");
        }
    })

    .post(async (req, res) => {
        const { name, username, mobileNumber, password, confirmPassword} = req.body;

        if (!name || !username || !mobileNumber || !password || !confirmPassword){
            return res.status(422).render("signup", {message: "Fill all the fields!"});
        }
        else if (password != confirmPassword){
            return res.status(422).render("signup", {message: "Password do not match!"});
        }

        try {            
            const userExists = await User.findOne({username: username});

            if (userExists){
                return res.status(422).render("signup", {message: "Email already exists!"});
            }
            else{
            
                const newUser = new User({ name, username, mobileNumber, password });

                await newUser.save();

                const newUserID = await User.findOne({username: username});

                // console.log(newUser._id.toString());
                res.cookie("user", newUserID._id.toString(), {
                    expires: new Date(Date.now() + 25982000000), // 30 days.
                    httpOnly: true
                });

                res.status(201).redirect("/home");
                
            }

        } catch (error) {
            console.log(error);
        }
            
        })
        

router.route("/login")
    .get((req, res) => {
        if (req.cookies.user){
            res.redirect("/home");
        } else {
            res.render("login");
        }
    })

    .post(async (req, res) => {
        try {
            const { username, password } = req.body;

            if (!username || !password){
                res.status(422).render("login", {message: "Fill all the credentials!"});
            }

            const checkUser = await User.findOne({username: username});
            
            if (checkUser){
                const matchPassword = await bcrypt.compare(password, checkUser.password);

                res.cookie("user", checkUser._id.toString(), {
                    expires: new Date(Date.now() + 25982000000), // 30 days.
                    httpOnly: true
                });

                if (matchPassword){
                    res.status(200).redirect("/home");
                }else{
                    res.status(400).render("login", {message: "Incorrect username or password!"});
                }
            }
            else{
                res.status(400).render("login", {message: "Incorrect username or password!"});
            }
            
        } catch (error) {
            
        }
    })

router.get("/home", async (req, res) => {
    if (req.cookies.user) {
        res.render("home");
    }
    else{
        res.redirect('/login');
    }
})

router.post("/logout", (req, res) => {
    res.clearCookie("user");
    res.redirect("/login");
})

export {router};