const userRoutes = require('./server/features/users/userRoutes.js');
const questionRoutes = require('./server/features/questions/questionRoutes.js');
const answerRoutes = require('./server/features/answers/answerRoutes.js');


module.exports = app => {
  userRoutes(app)
  questionRoutes(app)
  answerRoutes(app)
}
