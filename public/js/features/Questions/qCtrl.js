angular.module("devFlow")
.controller("qCtrl", function($scope, devSvc) {

  function getQuestions() { devSvc.getQuestions().then((results) => {
    $scope.questions = results;
    });
  };
  getQuestions();

});
