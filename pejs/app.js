import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import fs from "fs";

const __dirname = import.meta.dirname;

const app = express();
app.use(express.static(__dirname + '/public'));
// tell express to where static files located
// edit ejs files according to public file
app.use(morgan("dev"));
app.use(bodyParser.urlencoded( {extended: true } ));

app.get("/", (req, res) => {
    res.locals = {
        message: 123
    };
    console.log(__dirname);
    res.render("body.ejs");
});

app.listen(80);