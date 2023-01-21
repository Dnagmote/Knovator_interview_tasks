const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: String,
    body: String,
    created_by: String,
    status: {
        type: String,
        default: "active"
    },
    geo_location: {
        type: { type: String },
        coordinates: []
    }
  },
  { timestamps: true }
);

postSchema.index({geo_location: "2dsphere"})

module.exports = mongoose.model("postSchema", postSchema);
