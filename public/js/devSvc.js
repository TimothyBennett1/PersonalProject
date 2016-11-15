angular.module("devFlow")
    .service("devSvc", function($http) {

        var baseUrl = 'http://localhost:4000';

          this.getQuestions = function() {
                return $http.get(baseUrl + '/api/questions').then((res) => {
                    return res.data;
                });
            },

            this.getQuestion = function(id) {
                return $http.get(baseUrl + '/api/questions/' + id).then((res) => {
                    return res.data;
                });
            },


            this.getAnswers = function(question_id) {
                return $http.get(baseUrl + '/api/questions?question_id=' + question_id).then((res) => {
                    return res.data;
                })
            },

            this.postAnswer = (answer, question_id) => {
                const currentUser = JSON.parse(localStorage.getItem('profile'));

                answer.postedBy = {
                    nickname: currentUser.nickname,
                    name: currentUser.name,
                    user_id: currentUser.user_id,
                    picture: currentUser.picture
                };
                return $http.post(baseUrl + '/api/answers?question_id=' + question_id, answer).then((res) => {
                    return res.data;
                })
            }

            this.postQuestion = (question) => {
              return $http.post(baseUrl + '/api/questions', question).then((res) => {
                  return res.data;
              })
            }

            this.editQuestion = function(id) {
              return $http.put(baseUrl + '/api/questions/' + id).then((res) => {
                return res.data;
              })
            }

            this.editAnswer = function(id) {
              return $http.put(baseUrl + '/api/answers/' + id).then((res) => {
                return res.data;
              })
            }
    });
