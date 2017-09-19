(function () {
  function ProjectCtrl(Fixtures) {
    this.projectData = Fixtures.getProject();

  }
  angular
    .module('portfolio')
    .controller('ProjectCtrl', ['Fixtures', ProjectCtrl]);
})();
