var mongoose = require("../helper/db");
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var postSchema = new Schema({
  title: String,
  body: String,
  category : {type : ObjectId , ref: "Category"},
  user : {type : ObjectId , ref : "User"},
  tags : [{type : ObjectId , ref : "Tag"}]
});

var Post = mongoose.model("Post", postSchema);

module.exports = Post;
