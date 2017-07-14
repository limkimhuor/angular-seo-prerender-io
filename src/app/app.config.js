routing.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider"];

export default function routing($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
  // $stateProvider
  //   .state("about", {
  //     url: "/about",
  //     template: require("./features/about/about.html"),
  //     controller: "AboutController",
  //     constrollerAs: "about"
  //   });
}
