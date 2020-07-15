var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var passport = require('./helper/auth');
var cors = require('cors')

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var postsRouter = require("./routes/posts");
var tagsRouter = require("./routes/tags");
var commentsRouter = require("./routes/comments");
var categoriesRouter = require("./routes/categories");





var app = express();


// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "vash");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(passport.initialize());
app.use(cors());

var auth = passport.authenticate('jwt');

app.use("/", indexRouter);
app.use("/users", auth , usersRouter);
app.use("/posts", auth , postsRouter);
app.use("/tags",  auth , tagsRouter);
app.use("/comments", auth , commentsRouter);
app.use("/categories", auth , categoriesRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
