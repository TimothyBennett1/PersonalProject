angular.module('devFlow')
.controller('answerDirCtrl', function($scope) {

  $scope.answerAce = {
        useWrapMode : true,
        mode: 'javascript',
        theme:'idle_fingers',
        blockScrolling: Infinity,
        onLoad: function(_editor) {
          $scope.editor = _editor;
          $scope.editor.setValue($scope.answer.code)
        },
        onChange: function () {

        }
    }



})
