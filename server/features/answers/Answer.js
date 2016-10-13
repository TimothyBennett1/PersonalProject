const mongoose = require('mongoose');

const Answers = new mongoose.Schema( {
  answer: {type: String},
  date: {type: Date},
  votes: {type: Number}
});

module.exports = mongoose.model("Answers", Answers);
