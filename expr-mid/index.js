import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';


const __dirname = dirname(fileURLToPath(import.meta.url));

var app = express();
var port = 80;

app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    console.log(`[ ${req.url} ]`);
    next();
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
    console.log(req.body);
    res.send(`<a href="/">Home</a>`);
});

app.post("/login", (req, res) => {
    console.log(req.body);
    if (req.body["username"] === "klinux" && req.body["password"] === "123") {
        res.send(true);
    }
});

app.listen(port, () => {
    console.log("listening");
});
