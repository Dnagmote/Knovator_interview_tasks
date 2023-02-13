const router = require("express").Router();
const mongoose = require("mongoose");

//Models require
require("../../models/index.model.js");
const User = mongoose.model("userSchema");

router.post("/register", async (req, res) => {
  try {
    let result = User(req.body);
    result =await result.save();

    return res.status(200).json({
      status: "SUCCESS",
      message: "User register successfully",
      data: result,
    });
  } catch (error) {
    return res.status(400).json({
      status: "FAILURE",
      message: "Unable to user register.",
    });
  }
});

module.exports = router;








