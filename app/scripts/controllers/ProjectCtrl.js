(function () {
  function ProjectCtrl(Fixtures) {
    this.pageTitle = "RECENT WORK";

    this.projects = Fixtures.getCollection();

  }
  angular
    .module('portfolio')
    .controller('ProjectCtrl', ['Fixtures', ProjectCtrl]);
})();
