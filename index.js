const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
app.use(cors());

const app = express();
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

mongoose
  .connect(
    "mongodb+srv://newUser:czYxIVMlNV5lEEq7@cluster0.rlru629.mongodb.net/REGISTRATION-FORM?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("connected");
  })
  .catch((error) => {
    console.log(error);
  });
let db = mongoose.connection;

app.post("/reg", (req, res) => {
  let name = req.body.name;
  let age = req.body.age;
  let email = req.body.email;
  let phone = req.body.phone;
  let password = req.body.password;

  var data = {
    name: name,
    age: age,
    email: email,
    phone: phone,
    password: password,
  };
  db.collection("users").insertOne(data, (err, collection) => {
    if (err) {
      throw err;
    }
    console.log("Record Inserted successfully");
  });
  return res.redirect("reg_succes.html");
});
app
  .get("/", (req, res) => {
    res.set({
      "Allow-access-Allow-Origin": "*",
    });
    return res.redirect("index.html");
  })
  .listen(8000);
console.log("Listening to Port 8000");

//czYxIVMlNV5lEEq7
