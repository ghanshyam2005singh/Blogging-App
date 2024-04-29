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
    try {
        const token = await User.matchPasswordAndGenerateToken(email, password);

    return res.cookie("token", token).redirect("/");
    } catch (error) {
        return res.render("signin", {
            error: "Invalid email or password",
        });
    }
    }
);

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