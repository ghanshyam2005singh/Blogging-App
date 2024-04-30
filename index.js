const path = require("path");
const express = require ("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const userRouter = require("./routes/user");
const blogRoute = require("./routes/blog");

const app = express();
const PORT = 8000;

mongoose.connect("mongodb://localhost:27017/bloggers").then( e => console.log("MongoDB is Connected"));

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(checkForAuthenticationCookie("token"));

app.get("/", (req, res) => {
    res.render("home");
    user: req.user;
});

app.use("/user", userRouter);
app.use("/blog", blogRoute);


app.listen(PORT, () => console.log(`Server is running at PORT ${PORT}`));