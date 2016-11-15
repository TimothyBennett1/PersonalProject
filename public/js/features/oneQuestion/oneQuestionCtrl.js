angular.module('devFlow')
    .controller("oneQuestion", function($scope, devSvc, $stateParams) {

        $scope.getQuestion = getQuestion($stateParams.id);

        $scope.questionAce = {
            useWrapMode: true,
            mode: 'javascript',
            theme: 'idle_fingers',
            blockScrolling: Infinity,
            onLoad: function(_editor) {
                $scope.editor = _editor
            },
            onChange: function() {

            }
        }

        $scope.answerThisAce = {
            useWrapMode: true,
            mode: 'javascript',
            theme: 'idle_fingers',
            blockScrolling: Infinity,
            onLoad: function(_editor) {

            },
            onChange: function() {

            }
        }


        function getQuestion(id) {
            devSvc.getQuestion(id)
                .then((results) => {
                    $scope.oneQuestion = results;
                    $scope.editor.setValue($scope.oneQuestion.code);
                    $scope.Answers = results.answers;
                })
        }

        $scope.postAnswer = (answer, id) => {
            devSvc.postAnswer(answer, id)
                .then((answer) => {
                    $scope.answer = answer;
                    getQuestion($stateParams.id);
                })
        }

        

    })

.directive("oneQuestionDirective", function(devSvc) {
    return {
        scope: {
            answer: '=',
            date: '='
        },
        restrict: 'E',
        templateUrl: './js/features/oneQuestion/answer/answer-dir-tmpl.html',
        controller: 'answerDirCtrl'
    }
})
