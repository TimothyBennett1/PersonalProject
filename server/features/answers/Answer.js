const mongoose = require('mongoose');

const Answer = new mongoose.Schema( {
  answer: {type: String},
  date: {type: Date, default: new Date()},
  votes: {type: Number, default: 0},
  postedBy: {
      nickname: {type: String},
      name: {type: String},
      user_id: {type: String, required: true},
      picture: {type: String}
    }
});

module.exports = mongoose.model("Answer", Answer);
