(function () {
  function Fixtures() {

    var Fixtures = {};

    var projects = {
      projectSquatter: {
        title: "Squatter",
        developer: "Dominick Del Bosque",
        year: "2017",
        type: "Front End / Back End",
        screenshotUrl: '../../assets/images/squat.png',
        description: "Lorem Ipsum dolor..."
      },

      projectSandbox: {
        title: "Sandbox Suites",
        developer: "Dominick Del Bosque",
        year: "2017",
        type: "Front End",
        screenshotUrl: '../../assets/images/sandbox.png',
        description: "Lorem Ipsum dolor..."
      },
    };

    Fixtures.getProjects = function () {
      return projectBlocJams;
    };

    Fixtures.getCollection = function (numberOfProjects) {
      this.projects = [];

      for (var projectName in projects) {
        this.projects.push(angular.copy(projects[projectName]));
      }

      return this.projects;
    };

    return Fixtures;
  }

  angular
    .module('portfolio')
    .factory('Fixtures', Fixtures);
})();
