const mongoose = require('mongoose');

const Question = new mongoose.Schema( {
  question: {type: String},
  code: {type: String},
  tags: {type: String},
  date: {type: Date, default: new Date()},
  views: {type: Number, default: 0},
  postedBy: {
    nickname: {type: String},
    name: {type: String},
    user_id: {type: String, required: true},
    picture: {type: String}
  },
  answers: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Answer'
  }]
} );

module.exports = mongoose.model("Question", Question);
