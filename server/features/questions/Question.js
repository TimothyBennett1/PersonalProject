const mongoose = require('mongoose');

const Questions = new mongoose.Schema( {
  question: {type: String},
  tags: {type: String},
  date: {type: Date},
  views: {type: Number},
  postedBy: [{
    type:mongoose.Schema.Types.ObjectId,
    ref: 'Users'
  }],
  answers: [{
    type:mongoose.Schema.Types.ObjectId,
    ref: 'Answers'
  }]
});

module.exports = mongoose.model("Questions", Questions);
