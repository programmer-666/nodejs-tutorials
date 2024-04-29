import express from "express";
import morgan from "morgan";
import fs from "fs";


const app = express();
app.use(morgan("dev"));

app.get("/", (req, res) => {
    fs.readFile("public/header.html", "utf-8", (err, data) => {
        res.render("index.ejs", {
            headerTags: data
        });
        console.log(err);
    })
});

app.listen(80);
