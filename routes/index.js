var express = require("express");
var router = express.Router();
var jwt = require("jsonwebtoken");
var User = require("../models/user");
var hashPassword = require("../helper/password");
var fb = require("../helper/fb");
/* GET home page. */
router.get(
  "/",
  function (req, res, next) {
    // res.render('index', { title: 'Express' });
    console.log("a 1");
    next();
  },
  (req, res, next) => {
    console.log("a 2");
    next();
  },
  (req, res) => {
    res.send("Hello");
  }
);

router.post("/api/login", async (req, res) => {
  var hash = await hashPassword(req.body.password);
  User.findOne({ email: req.body.email, password: hash }, (err, user) => {
    if (user == null) {
      res.status(401);
      res.json("user is not found");
    } else {
      var token = jwt.sign(
        { _id: user._id, name: user.name, isAdmin: user.isAdmin },
        "blogApi"
      );
      res.json({ token, isAdmin: user.isAdmin });
    }
  });
});

router.post("/api/register", async (req, res) => {
  var hash = await hashPassword(req.body.password);
  var { email, name } = req.body;
  User.create({ email, name, password: hash }, (err, result) => {
    var token = jwt.sign(
      { _id: result._id, name: result.name, isAdmin: result.isAdmin },
      "blogApi"
    );
    res.json({ token, isAdmin: result.isAdmin });
  });
});

router.get("/fb", async (req, res) => {
  var result = await fb(1);
  console.log(result);
  res.send(result);
});

module.exports = router;
