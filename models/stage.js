const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stageSchema = new Schema({
  name: { type: String, required: true },
  background: { type: String, required: false },
  song: { type: String, required: true },
  costume: {
    type: Map,
    of: String,
    required: false
  },
  filter: { type: String, required: false}
});

const Stage = mongoose.model("Stage", stageSchema);

module.exports = Stage;
