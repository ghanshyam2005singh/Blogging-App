const express = require('express');
const User = require("../models/user");

const router = Router();

router.get("/signin", (req, res) => {
    return res.render("signin");
});

router.get("/signup", (req, res) => {
     return res.render("signup");
});

router.post("/singin", async (req, res) => {
    const {eamil, password} = req.body;
    const user = User.matchPassword(email, password);

    console.log("User", user);
    return res.redirect("/");
});

router.post("/signup", async (req, res) => {
    const { fullName, email, password} = req.body;
    await User.create({
        fullNmae,
        email,
        password,
    });
    return res.redirect("/");
});

module.export = router;