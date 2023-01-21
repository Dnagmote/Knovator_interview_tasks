module.exports = (app) => {
  let userRoute = require("./user/user.route.js");
  let postRoute = require("./post/post.route.js")

  app.use("/api/user", userRoute);
  app.use("/api/post", postRoute);
};
