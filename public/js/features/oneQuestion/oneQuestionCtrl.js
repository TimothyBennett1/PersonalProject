angular.module('devFlow')
    .controller("oneQuestion", function($scope, devSvc, $stateParams) {

        $scope.test = "test"

        console.log('stateParams', $stateParams)

        var editor = ace.edit("editor");
        editor.setTheme("ace/theme/monokai");
        editor.getSession().setMode("ace/mode/javascript")



        $scope.getQuestion = getQuestion($stateParams.id)


        function getQuestion(id) {
            devSvc.getQuestion(id).then((results) => {
                $scope.oneQuestion = results;
                $scope.Answers = results.answers;
            })
        }

        $scope.postAnswer = (answer, question_id) => {
            devSvc.postAnswer(answer, question_id)
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
        templateUrl: './js/features/oneQuestion/answer/answer-dir-tmpl.html'
      }
    })
