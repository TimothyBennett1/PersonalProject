angular.module("devFlow")
    .controller("devCtrl", ($scope, authService) => {

        $scope.authService = authService;

    });
