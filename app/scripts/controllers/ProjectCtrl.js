(function () {
  function ProjectCtrl(Fixtures) {
    this.pageTitle = "RECENT WORK";

    this.projects = Fixtures.getCollection(2);
  }
  angular
    .module('portfolio')
    .controller('ProjectCtrl', ['Fixtures', ProjectCtrl]);
})();
