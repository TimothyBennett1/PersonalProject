const questionCtrl = require('./questionCtrl');

module.exports = app => {

    //Get Question/'s
    app.get('/api/questions/:id', questionCtrl.getOneQuestion);
    app.get('/api/questions', questionCtrl.getQuestions);
    //Post Question
    app.post('/api/questions', questionCtrl.postQuestion);
    //Edit Question
    app.put('/api/questions/:id', questionCtrl.editQuestion);

    // Get answers for one question
    // app.get("/api/questions/:id", questionCtrl.getAllAnswersForQuestion);
};
