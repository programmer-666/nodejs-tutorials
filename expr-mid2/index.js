import fs from "fs";
import express from "express";
import morgan from "morgan";
import { randomBytes } from "crypto";
import path from "path";
import bodyParser from "body-parser";

const app = express();
const port = 80;

var session_code = 0;

// app.use(morgan("combined"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve("public")));

app.use((req, res, next) => {
  if (req.url != "/login" && req.url != "/register") {
    if (session_code != 0) {
      next();
    } else {
      res.send("<h2>Please Login...</h2>");
    }
  } else {
    next();
  }
});

app.get("/", (req, res) => {
  console.log(req.ip);
  res.sendFile(path.resolve("./public/index.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.resolve("./public/login.html"));
});

app.post("/check", (req, res) => {
  fs.readFile("users.json", "utf-8", (err, data) => {
    if (req.body["username"] in JSON.parse(data)) {
      if (req.body["password"] === JSON.parse(data)[req.body["username"]]) {
        res.send("<label>✅ Login success</label>");
        session_code = randomBytes(32);
      } else {
        res.send("<label>Passsword incorrect.</label>");
      }
    } else {
      res.send("<label>Username incorrect.</label>");
    }
  });
});

app.get("/register", (req, res) => {
  res.sendFile(path.resolve("./public/register.html"));
});

app.post("/createUser", (req, res) => {
  fs.readFile("users.json", "utf-8", (err, data) => {
    if (!err) {
      if (!(req.body["username"] in JSON.parse(data))) {
        var usersObject = JSON.parse(data);
        usersObject[req.body["username"]] = req.body["password"];
        fs.writeFile(
          "users.json",
          JSON.stringify(usersObject),
          "utf-8",
          (err, data) => {
            if (err) throw err;
            res.send(`<p>✅ User successfully created.</p><br>
                    <a href="/">Homepage</a>`);
          },
        );
      } else {
        res.send("User already exists.");
      }
    } else {
      console.error(err);
    }
  });
});

app.listen(port, () => {
  console.log("listening");
});
