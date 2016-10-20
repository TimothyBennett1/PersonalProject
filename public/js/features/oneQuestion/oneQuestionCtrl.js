angular.module('devFlow')
    .controller("oneQuestion", function($scope, devSvc, $stateParams) {

        $scope.test = "test"

        console.log('stateParams', $stateParams)

        var editor = ace.edit("editor");
        editor.setTheme("ace/theme/monokai");
        editor.getSession().setMode("ace/mode/javascript");
        editor.resize()



        $scope.getQuestion = getQuestion($stateParams.id)


        function getQuestion(id) {
            devSvc.getQuestion(id).then((results) => {
                console.log("hi", results)
                $scope.oneQuestion = results;
                $scope.Answers = results.answers;
            })
        }

        $scope.postAnswer = (answer, question_id) => {
            devSvc.postAnswer(answer, question_id)
                .then((answer) => {
                    $scope.answer = answer;
                    getAnswers( question_id );
                })
        }


    });
