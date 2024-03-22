import express from "express";
import fs from "fs";

const app = express();
const port = 80;


app.listen(port, () => {
  console.log(`Server Active ${port}`);
});

app.get("/", (req, res) => {
  fs.readFile("header.html", "utf-8", (err, data) => {
    res.sendStatus(200);
    res.send(data);
  });
});

app.get("/info", (req, res) => {
    res.sendStatus(200);
    res.send("informational data");
});
