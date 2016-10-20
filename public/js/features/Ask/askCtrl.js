angular.module("devFlow")
.controller("askCtrl", function($scope, devSvc, authService, $rootScope) {

  $scope.question = {};

  const currentUser = JSON.parse(localStorage.getItem('profile'));

  $scope.addQuestion = (question) => {
    question.postedBy = {
      name: currentUser.name,
      user_id: currentUser.user_id,
      picture: currentUser.picture
    };
      devSvc.postQuestion(question)
        .then((question) => {
          console.log(question);
          $scope.question = {};
        })
  }


});
