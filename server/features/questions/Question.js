const mongoose = require('mongoose');

const Question = new mongoose.Schema( {
  question: {type: String},
  tags: {type: String},
  date: {type: Date},
  postedBy: {
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
