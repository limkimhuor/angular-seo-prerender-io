export default class AboutController {
  constructor($scope) {
    this.name = "about";
    $scope.$parent.seo = {
      pageTitle: "About",
      pageDescripton: "About page description."
    };
  }
}
