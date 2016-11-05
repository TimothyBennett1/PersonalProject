angular.module("devFlow")
    .controller("qCtrl", function($scope, devSvc, $rootScope, $stateParams) {

        var profile;

        $rootScope.$on("userProfileSet", (event, userProfile) => {
            profile = userProfile;
            console.log(profile)
        })

        $scope.question = {};


        function getQuestions() {
            devSvc.getQuestions().then((results) => {
                $scope.questions = results;
            });
        };
        getQuestions();


    });
