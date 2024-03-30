import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";


const app = express();
const port = 80;

app.use(morgan("short"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.send(true);
    console.log(req.query.x);
});

app.listen(port, () => {
    console.log(`[L]:${port}`);
});
