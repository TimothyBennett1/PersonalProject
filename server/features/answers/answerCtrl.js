const Answer = require('./Answer')

module.exports = {

  postAnswer(req, res)  {
    new Answer(req.body).save((err, answer) => {
      if (err) {
          return res.status(500).json(err);
      }
      return res.status(200).json(answer);
    });
  },

  getAnswers(req, res)  {
    Answers.find(req.query)
      .exec((err, answer) => {
        if (err) {
            return res.status(500).json(err);
        }
        return res.status(200).json(answer);
      });
   },

   getOneAnswer(req, res) {
     Answers.findById(req.params.id)
       .exec((err, answer) => {
         if (err) {
            return res.status(500).json(err);
        }
        return res.status(200).json(answer);
     });
   },

   editAnswer(req, res) {
       if (!req.params.id) {
           return res.status(400).send('Not in User');
       }
       Answers.findByIdAndUpdate(req.params.id, req.body)
           .exec((err, answer) => {
               if (err) {
                   return res.send(err);
               }
               return res.json(answer);
           });
   }

};
