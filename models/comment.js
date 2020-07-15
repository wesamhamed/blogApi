var mongoose = require("../helper/db");
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;
var commentSchema = new Schema({
  content: String,
  post : {type : ObjectId , ref : "Post"},
  user : {type : ObjectId , ref : "User"}
});

var Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
