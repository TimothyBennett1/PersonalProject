const mongoose = require('mongoose');

const Users = new mongoose.Schema( {
    name: {type: String},
    email: {type: String},
    creationDate: {type: Date},
    photo: {type: String},
    questions: [{
      type:mongoose.Schema.Types.ObjectId,
      ref: `Questions`
    }],
    answers: [{
      type:mongoose.Schema.Types.ObjectId,
      ref: `Answers`
    }]
});

module.exports = mongoose.model("Users", Users);
