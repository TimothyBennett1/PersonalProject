const Questions = require('./Question')



module.exports = {
  
  postQuestion(req, res) {
    new Questions(req.body).save((err, question) => {
      if (err) {
          return res.status(500).json(err);
      }
      return res.status(200).json(question);
    });
  },

  getQuestions(req, res) {
    Questions.find(req.query)
      .exec((err, question) => {
        if (err) {
            return res.status(500).json(err);
        }
        return res.status(200).json(question);
      });
   },

   getAllAnswersForQuestion(req, res) {
     Questions.findById(req.params.id)
       .populate('answers')
       .exec((err, question) => {
         if (err) {
            return res.status(500).json(err);
        }
        return res.status(200).json(question);
     });

   },

   getOneQuestion(req, res) {
     Questions.findById(req.params.id)
     .populate('answers')
       .exec((err, question) => {
         if (err) {
            return res.status(500).json(err);
        }
        return res.status(200).json(question);
     });

   },

   editQuestion(req, res) {
       if (!req.params.id) {
           return res.status(400).send('Not in question');
       }
       Questions.findByIdAndUpdate(req.params.id, req.body)
           .exec((err, question) => {
               if (err) {
                   return res.send(err);
               }
               return res.json(question);
           });
   },

   putAnswer(req, res) {
     new Answers(req.body).save((err, answer) => {
       if (err) {
           return res.status(500).json(err);
       }
       return res.status(200).json(question);
     });
    }

};
