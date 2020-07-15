var mongoose = require("../helper/db");
var Schema = mongoose.Schema;

var tagSchema = new Schema({
  name: String,
});

var Tag = mongoose.model("Tag", tagSchema);

module.exports = Tag;
