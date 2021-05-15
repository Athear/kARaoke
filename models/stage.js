const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stageSchema = new Schema({
  name: { type: String, required: true },
  background: { type: String, required: false },
  costume: {
    type: Map,
    of: String
  }
});

const Stage = mongoose.model("Stage", stageSchema);

module.exports = Stage;
