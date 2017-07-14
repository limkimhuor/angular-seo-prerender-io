export default class HomeController {
  constructor($scope) {
    this.name = "home";
    $scope.$parent.seo = {
      pageTitle: "Homepage",
      pageDescripton: "Welcome to AngularJS websites and apps indexed by Google."
    };
  }
}
