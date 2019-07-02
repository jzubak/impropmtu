const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const airportSchema = new Schema({
  code: { type: String, required: true },
  activity1: { type: INT, required: true },
  activity2: { type: INT, required: true },
  activity3: { type: INT, required: true },
  activity4: { type: INT, required: true },
  activity5: { type: INT, required: true },
  activity6: { type: INT, required: true },
  activity7: { type: INT, required: true },
  activity8: { type: INT, required: true },
  activity9: { type: INT, required: true }
});

const Book = mongoose.model("Book", airportSchema);


module.exports = Book;
