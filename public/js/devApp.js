angular.module("devFlow", ["ui.router"])
.config(($stateProvider, $urlRouterProvider) => {
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state("home", {
      url: "/",
      templateUrl: "js/features/Questions/qTmpl.html",
      controller: "qCtrl"
    })
    .state("ask", {
      url: "/ask",
      templateUrl: "js/features/Ask/askTmpl.html"
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
