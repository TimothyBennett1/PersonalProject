const answerCtrl = require('./answerCtrl');


module.exports = app => {

  //Get Answer/'s
  app.get('api/answers', answerCtrl.getAnswers);
  app.get('api/answers/:id', answerCtrl.getOneAnswer);
  //Post Answer
  app.post('api/answers', answerCtrl.postAnswer);
  //Edit Answer
  app.put('api/answers/:id', answerCtrl.editAnswer);


};
