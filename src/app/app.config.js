routing.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider"];

export default function routing($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $locationProvider.hashPrefix('!');
  $urlRouterProvider.otherwise('/');
}
