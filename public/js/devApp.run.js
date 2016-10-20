angular.module('devFlow')
    .run(function($rootScope, authService, authManager, lock, jwtHelper, $state, $timeout) {

        // Put the authService on $rootScope so its methods
        // can be accessed from the nav bar
        $rootScope.authService = authService;

        // Put the authService on $rootScope so its methods
        // can be accessed from the nav bar
        lock.interceptHash();
        console.log("app.run working");

        authService.registerAuthenticationListener();

        // Use the authManager from angular-jwt to check for
        // the user's authentication state when the page is
        // refreshed and maintain authentication
        authManager.checkAuthOnRefresh();

        // Listen for 401 unauthorized requests and redirect
        // the user to the login page
        authManager.redirectWhenUnauthenticated();
    });
