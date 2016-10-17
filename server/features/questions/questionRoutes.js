const questionCtrl = require('./questionCtrl');

module.exports = app => {

    //Get Question/'s
    app.get('/api/questions', questionCtrl.getQuestions);
    app.get('/api/questions/:id', questionCtrl.getOneQuestion);
    //Post Question
    app.post('/api/questions', questionCtrl.postQuestion);
    //Edit Question
    app.put('/api/questions/:id', questionCtrl.editQuestion);

};
