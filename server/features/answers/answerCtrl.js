const Answer = require('./Answer')

module.exports = {

  postAnswer(req, res) => {
    new Answer(req.body).save((err, answer) => {
      if (err) {
          return res.status(500).json(err);
      }
      return res.status(200).json(answer);
    });
  },

  getAnswer(req, res) => {
    Answers.find(req.query)
      .exec((err, answer) => {
        if (err) {
            return res.status(500).json(err);
        }
        return res.status(200).json(answer);
      });
   },

   getOneAnswer(req, res) {
     Answers.findById()
   }

};
