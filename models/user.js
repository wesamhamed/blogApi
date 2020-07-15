var mongoose = require("../helper/db");
var Schema = mongoose.Schema;

var userSchema = new Schema({
  email: String,
  name: String,
  isAdmin: {type : Boolean , default : false},
  password : String
});

var User = mongoose.model("User", userSchema);

module.exports = User;
