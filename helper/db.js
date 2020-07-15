var mongoose = require("mongoose");

mongoose.connect("mongodb+srv://user:user@cluster0-xv4im.mongodb.net/blogApi?retryWrites=true&w=majority");

module.exports = mongoose;
