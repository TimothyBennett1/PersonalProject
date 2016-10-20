const userRoutes = require('./features/users/userRoutes.js');
const questionRoutes = require('./features/questions/questionRoutes.js');
const answerRoutes = require('./features/answers/answerRoutes.js');


module.exports = app => {
  userRoutes(app)
  questionRoutes(app)
  answerRoutes(app)
}
