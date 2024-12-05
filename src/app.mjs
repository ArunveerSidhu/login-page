import express from "express";
import userModel from "../models/user.mjs";
import connection from "../config/db.mjs";

const app = express();
const port = 8080;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render("index");
});

app.post('/get-form-data/', async (req, res) => {
  const { username, email, password } = req.body;
  await userModel.create({
    username: username,
    email: email,
    password: password,
  });
  res.render("submit");
  console.log("user added");
})

app.listen(port, () => {
  console.log(port);
})

