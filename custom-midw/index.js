import morgan from "morgan";
import express from "express";
import bodyParser from "body-parser";


const app = express();
const port = 80;

app.use(morgan("short"));
app.use(bodyParser.urlencoded({extended: true}));

var id = 0;

app.use((req, res, next) => {
    console.log(id);
    next();
});

app.get("/user/:id", (req, res) => {
    res.send(req.params.id);
    id = req.params.id;
});

app.get("/", (req, res) => {
    res.send(true);
    console.log(req.query.x);
});

app.listen(port, () => {
    console.log(`[L]:${port}`);
});
