angular.module("devFlow")
    .controller("askCtrl", function($scope, devSvc, authService, $rootScope) {


        $scope.askAce = {
            useWrapMode: true,
            mode: 'javascript',
            theme: 'idle_fingers',
            onLoad: function(_editor) {},
            onChange: function(_editor) {}
        }


        $scope.question = {};

        const currentUser = JSON.parse(localStorage.getItem('profile'));

        $scope.addQuestion = (question) => {
            question.postedBy = {
                nickname: currentUser.nickname,
                name: currentUser.name,
                user_id: currentUser.user_id,
                picture: currentUser.picture
            };
            devSvc.postQuestion(question)
                .then((question) => {
                    $scope.question = {};
                })
            devSvc.getQuestions();
        }


    });
