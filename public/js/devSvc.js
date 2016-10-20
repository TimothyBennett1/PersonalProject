angular.module("devFlow")
    .service("devSvc", function($http) {

        var baseUrl = 'http://localhost:4000';

        this.getQuestions = function() {
                return $http.get(baseUrl + '/api/questions').then((res) => {
                    return res.data;
                });
            },

            this.getQuestion = function(id) {
                console.log(id);
                return $http.get(baseUrl + '/api/questions/' + id).then((res) => {
                    return res.data;
                });
            },


            this.getAnswers = function(question_id) {
                return $http.get(baseUrl + '/api/questions?question_id=' + question_id ).then((res) => {
                    return res.data;
                    // console.log(res.data);
                })
            },

            this.postAnswer = (answer, question_id) => {
                const currentUser = JSON.parse(localStorage.getItem('profile'));

                answer.postedBy = {
                  name: currentUser.name,
                  user_id: currentUser.user_id,
                  picture: currentUser.picture
                };
                console.log(question_id);
                return $http.post(baseUrl + '/api/answers?question_id=' + question_id, answer).then((res) => {
                    return res.data;
                })
            }

        this.postQuestion = (question) => {
            return $http.post(baseUrl + '/api/questions', question).then((res) => {
                return res.data;
            })
        }

    });
