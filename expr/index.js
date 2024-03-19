import express from "express";
import fs from "fs";


const app = express();

app.listen(80, () => {
    console.log("Server Active");
});

app.get("/", (req, res) => {
    fs.readFile("header.html", "utf-8", (err, data) => {
        res.send(data);
        console.log(req.params);
    });
});
