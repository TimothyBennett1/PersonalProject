angular.module("devFlow")
.service("devSvc", function($http) {

    var baseUrl = 'http://localhost:4000';

    this.getQuestions = function() {
      return $http.get(baseUrl + '/api/questions').then((res) => {
        return res.data;
      });
    },

    this.getQuestion = function() {
      return $http.get(baseUrl + '/api/questions/:id').then((res) => {
        return res.data;
      });
    },


    this.getAnswers = function() {
      return $http.get(baseUrl + '/api/answers').then((res) => {
        return res.data;
      })
    },

    this.getAnswer = () => {
      return $http.get(baseUrl + '/api/questions/:id').then((res) => {
        return res.data;
      });
    },

    this.
});
