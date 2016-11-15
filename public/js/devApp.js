  angular.module("devFlow", ["angular-jwt", 'auth0.lock', 'ui.router', 'ui.ace'])
      .config(($stateProvider, $urlRouterProvider, $httpProvider, lockProvider, jwtOptionsProvider, jwtInterceptorProvider) => {

          $urlRouterProvider.otherwise("/");

          lockProvider.init({
              clientID: 'I5z1YxvnhMpvtzFc8EvrNAlVeZVHUq3q',
              domain: 'timothybennett.auth0.com'

          });

          jwtOptionsProvider.config({
              tokenGetter: function() {
                  return localStorage.getItem('id_token');
              },
              whiteListedDomains: ["http://localhost:4000/api"]

          });

          $httpProvider.interceptors.push('jwtInterceptor');



          $stateProvider
              .state('home', {
                  url: '/',
                  controller: "qCtrl",
                  templateUrl: 'js/features/Questions/questionsTmpl.html'
              })
              .state('question', {
                  url: '/questions/:id',
                  controller: 'oneQuestion',
                  templateUrl: 'js/features/oneQuestion/oneQuestionTmpl.html'
              })
              .state('login', {
                  url: "/login",
                  controller: 'loginController',
              })
              .state("ask", {
                  url: "/ask",
                  templateUrl: "js/features/Ask/asktmpl.html",
                  controller: "askCtrl"

              })
              .state("tags", {
                  url: "/tags",
                  templateUrl: "js/features/Tags/tagsTmpl.html"
              })
              .state("users", {
                  url: "/users",
                  templateUrl: "js/features/Users/usersTmpl.html"
              })
      });
