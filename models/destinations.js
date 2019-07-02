const sequalize = require("sequlaize");
const Schema = sequalize.Schema;

const destinationSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const Trip = sequalize.model("Trip", destinationSchema);

module.exports = Trip;
