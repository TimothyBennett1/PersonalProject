angular.module("devFlow")
    .controller("qCtrl", function($scope, devSvc, $rootScope, $stateParams) {

        var profile;

        $rootScope.$on("userProfileSet", (event, userProfile) => {
            profile = userProfile;
        })

        $scope.question = {};

        $scope.postCount = (id) => {
          devSvc.editQuestion(id).then((results) => {
            $scope.viewCount = results.views;
          })
        }

        function getQuestions() {
            devSvc.getQuestions().then((results) => {
                $scope.questions = results;
            });
        };
        getQuestions();


    });
