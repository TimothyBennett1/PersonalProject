const Answer = require('./Answer');
const Question = require('./../questions/Question');

module.exports = {

  postAnswer(req, res)  {
    Answer.create(req.body, (err, answer) =>{
      if (err) {
          return res.status(500).json(err);
      }
       Question.findByIdAndUpdate(req.query.question_id, {$push: {answers: answer._id }},{safe: true, upsert:true, new:true}, (error, response) => {
         if(error){
           return res.status(500).json(error);
         }
         else {
           return res.status(200).json(response);
         }
       });
    });
  },

  getAnswers(req, res)  {
    Answer.find()
      .exec((err, answer) => {
        if (err) {
            return res.status(500).json(err);
        }
        return res.status(200).json(answer);
      });
   },

   getOneAnswer(req, res) {
     Answer.findById(req.params.id)
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
       Answer.findByIdAndUpdate(req.params.id, req.body)
           .exec((err, answer) => {
               if (err) {
                   return res.send(err);
               }
               return res.json(answer);
           });
   }

};
