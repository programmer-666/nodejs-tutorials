import bodyParser from "body-parser";
import express from "express";
import morgan from "morgan";
import fs from "fs";


const app = express();

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.locals = {
        test: "t123$"
    };

    fs.readFile("public/header.html", "utf-8", (err, data) => {
        res.render("index.ejs", {
            headerTags: data
        });
    })
});

app.get("/ptest", (req, res) => {
    res.render("ptest.ejs");
});
app.post("/ptest", (req, res) => {
    res.send("ok");
    console.log(req.body["val"]);
});


app.listen(80);
