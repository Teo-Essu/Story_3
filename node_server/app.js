const express = require("express");
const bodyParser = require("body-parser");
const res = require("express/lib/response");
const app = express();
// const https = require("https");


app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.json({extended: false}));

// home route
app.get("/", function(req, res){
  res.send("Hello World!");
  console.log("Let's goooo");
});
//signup route
app.post("/signup", async function(req, res){
  // res.send("Signup route");
  const{email, password} = req.body;
  console.log(email);
  console.log(password);
  console.log("Let's goooo");
  res.json({token:"1234567890"});
});

app.listen(5000, "0.0.0.0", function () {
  console.log("Server is running on port 5000.")
});