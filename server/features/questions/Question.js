const mongoose = require('mongoose');

const Questions = new mongoose.Schema( {
  answer: {type: String},
  tags: {type: String},
  date: {type: Date},
  views: {type: Number},
  answers: [{
    type:mongoose.Schema.types.ObjectId,
    ref: 'Answers'
  }]
});

module.exports = mongoose.model("Questions", Questions);
