const mongoose = require('mongoose');

const Answers = new mongoose.Schema( {
  answer: {type: String},
  date: {type: Date},
  votes: {type: Number},
  postedBy: [{
    type:mongoose.Schema.Types.ObjectId,
    ref: 'Users'
  }]
});

module.exports = mongoose.model("Answers", Answers);
