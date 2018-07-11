const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

var friends = ["tony", "miranda", "eldon", "justin", "lily"];

app.get("/", (req, res) => {
  res.render("home");
});

app.post("/addfriend", (req, res) => {
  var newFriend = req.body.newfriend;
  friends.push(newFriend);
  res.redirect("/friends");
});

app.get("/friends", (req, res) => {
  res.render("friends", { friends: friends });
});

app.listen(port, () => {
  console.log("listening on port", port);
});
