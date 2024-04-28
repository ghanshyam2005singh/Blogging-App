const path = require("path");
const express = require ("express");
const mongoose = require("mongoose");

const userRouter = require("./routes/user");

const app = express();
const PORT = 8000;

mongoose.connect("mongodb://localhost:27017/bloggers").then( e => console.log("MongoDB is Connected"));

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({extended: false}));

app.get("/", (req, res) => {
    res.render("home");
});

app.use("/user", userRouter);

app.listen(PORT, () => console.log(`Server is running at PORT ${PORT}`));