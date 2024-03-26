import express from "express";
import morgan from "morgan";
import path from "path";
import bodyParser from "body-parser";

const app = express();
const port = 80;

app.use(morgan("combined"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
	res.sendFile(path.resolve("./public/index.html"));
});

app.get("/register", (req, res) => {
    res.sendFile(path.resolve("./public/register.html"));
});

app.post("/createUser", (req, res) => {
    console.log(req.body["username"]);
});

app.listen(port, () => {
	console.log("listening");
});
