(function () {
  function ProjectCtrl(Fixtures) {
    this.projectData = Fixtures.getProject();
    this.fixtures = Fixtures;
  }
  angular
    .module('portfolio')
    .controller('ProjectCtrl', ['Fixtures', ProjectCtrl]);
})();
