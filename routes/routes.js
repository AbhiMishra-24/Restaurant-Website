import { Router } from "express";

import { User } from "../schema models/userSchema.model.js";
import { Menu } from "../schema models/menuSchema.model.js";

import bcrypt from "bcryptjs";
import { upload } from "../file upload/multer.middleware.js";
import { uploadOnCloudinary } from "../file upload/cloudinary.js";

// import multer from "multer";

// const upload = multer({dest: ""});

const router = Router();

router.get("/", (req, res) => {
    if (req.cookies.user) {
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
        if (req.cookies.user) {
            res.redirect("/home");
        } else {
            res.render("signup");
        }
    })

    .post(async (req, res) => {
        const { name, username, mobileNumber, password, confirmPassword } = req.body;

        if (!name || !username || !mobileNumber || !password || !confirmPassword) {
            return res.status(422).render("signup", { message: "Fill all the fields!" });
        }
        else if (password != confirmPassword) {
            return res.status(422).render("signup", { message: "Password do not match!" });
        }

        try {
            const userExists = await User.findOne({ username: username });

            if (userExists) {
                return res.status(422).render("signup", { message: "Email already exists!" });
            }
            else {

                const newUser = new User({ name, username, mobileNumber, password });

                await newUser.save();

                const newUserID = await User.findOne({ username: username });

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
        if (req.cookies.user) {
            res.redirect("/home");
        } else {
            res.render("login");
        }
    })

    .post(async (req, res) => {
        try {
            const { username, password } = req.body;

            if (!username || !password) {
                res.status(422).render("login", { message: "Fill all the credentials!" });
            }

            else {
                const checkUser = await User.findOne({ username: username });

                if (checkUser) {
                    const matchPassword = await bcrypt.compare(password, checkUser.password);

                    res.cookie("user", checkUser._id.toString(), {
                        expires: new Date(Date.now() + 25982000000), // 30 days.
                        httpOnly: true
                    });

                    if (matchPassword) {
                        res.status(200).redirect("/home");
                    } else {
                        res.status(400).render("login", { message: "Incorrect username or password!" });
                    }
                }
                else {
                    res.status(400).render("login", { message: "Incorrect username or password!" });
                }
            }

        } catch (error) {

        }
    })

router.route("/profile")
    .get(async (req, res) => {
        if (req.cookies.user) {

            const user = await User.findById({ _id: req.cookies.user });

            if (user) {
                res.status(200).render("profile", { user });
            }

        } else {
            res.redirect("/login");
        }
    })

    .post(upload.single("profileImg"), async (req, res) => {

        console.log(req.file);

        const { id, name, username, mobileNumber, gender, DOB } = req.body;

        let profileImg;

        if (!req.file) {
            profileImg = null;
            // console.log("file not.");
        } else {
            profileImg = req.file.originalname;
            // console.log("file exist.");
        }

        let user = await User.findById({ _id: req.cookies.user });

        if (!profileImg || !name || !username || !mobileNumber || !gender || !DOB) {
            res.status(422).render("profile", { user, message: "Fill all the fields are as asterisk!" });
        }

        else {

            const response = await uploadOnCloudinary(req.file.path);

            const filter = { _id: id };

            const update = {
                profileImg: response.secure_url,
                name: name,
                username: username,
                mobileNumber: mobileNumber,
                gender: gender,
                DOB: DOB
            }
            user = await User.findOneAndUpdate(filter, update, {
                new: true
            });

            res.status(201).render("profile", { user })
        }

    })


router.get("/home", async (req, res) => {
    if (req.cookies.user) {

        const coffee = await Menu.findOne({category: "coffee"});
        const soup = await Menu.findOne({category: "soup"});
        const snacks = await Menu.findOne({category: "snacks"});
        const starters = await Menu.findOne({category: "starters"});
        const maincourse = await Menu.findOne({category: "main course"});
        const biryani = await Menu.findOne({category: "biryani"});
        const bread = await Menu.findOne({category: "bread"});
        const southindian = await Menu.findOne({category: "south indian"});
        const chinese = await Menu.findOne({category: "chinese"});
        const drinks = await Menu.findOne({category: "drinks"});
        const dessert = await Menu.findOne({category: "dessert"});

        const menu = [coffee, soup, snacks, starters, maincourse, biryani, bread, southindian, chinese, drinks, dessert];

        res.render("home", { menu });
    }
    else {
        return res.redirect('/login');
    }
})


router.post("/logout", (req, res) => {
    res.clearCookie("user");
    res.redirect("/login");
})

export { router };