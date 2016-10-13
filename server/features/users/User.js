const mongoose = require('mongoose');

const Users = new mongoose.Schema( {
    firstName: {type: Stringtype: String},
    lastName: {type: String},
    email: {type: String},
    creationDate: {type: Date}
    photo: {type: String},
    questions: [{
      type:mongoose.Schema.types.ObjectId,
      ref: 'Questions'
    }],
    answers: [{
      type:mongoose.Schema.types.ObjectId,
      ref: 'Answers'
    }]
});

module.exports = mongoose.model("Users", Users);
