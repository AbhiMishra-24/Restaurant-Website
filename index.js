import express from "express";
import _ from "lodash";
import { connectMongoose, User } from "./database.js";
import LocalStrategy from "passport-local";
import passport from "passport";
import session from "express-session";
import { isAuthenticated, isLoginAuthenticated } from "./isAuthenticated.js";

const app = express();
const port = 4000;

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
    secret: "Abhishek",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

connectMongoose();

passport.use("local", new LocalStrategy.Strategy(async (username, password, done) => {
    try {
        const user = await User.findOne({ username: username });

        if (!user) return done(null, false);
        if (user.password != password) return done(null, false);

        return done(null, user);

    } catch (error) {
        return done(error, false);
    }
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
})

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (error) {
        done(error, false);
    }
})

app.get("/", isLoginAuthenticated, (req, res) => {
    res.render("index");
});
app.get("/joinus", (req, res) => {
    ; res.render("joinus");
})
app.get("/login", isLoginAuthenticated, (req, res) => {
    res.render("login");
});
app.get("/signup", isLoginAuthenticated, (req, res) => {
    res.render("signup");
});

app.get("/home", isAuthenticated, (req, res) => {
    res.render("home");
})

app.post("/signup", async (req, res) => {
    const userExists = await User.findOne({ username: req.body.username });

    if (userExists) return res.status(400).render("signup", { content: "User already exists !" });

    const newUser = new User({
        name: req.body.name,
        username: req.body.username,
        mobileNumber: _.toNumber(req.body.mobileNumber),
        password: req.body.password
    });

    await newUser.save().then(console.log("Successfully registered !"));

    res.redirect("/home");
})

app.post("/login", passport.authenticate("local", { failureRedirect: "/login" }), (req, res) => {
    res.redirect("/home");
});

app.post("/logout", (req, res) => {
    req.logOut(() => {
        res.redirect("/login");
    });
})

app.listen(process.env.PORT || port, (req, res) => {
    console.log(`Listening on the port ${port}.`);
});