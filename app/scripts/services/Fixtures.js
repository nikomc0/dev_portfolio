(function () {
  function Fixtures() {

    var Fixtures = {};

    var projects = {
      projectSquatter: {
        id: "Squatter",
        title: "Squatter",
        developer: "Dominick Del Bosque",
        year: "2017",
        type: "Front End / Back End",
        screenshotUrl: '../../assets/images/squat.png',
        description: "Real Estate app that lets commercial property owners rent on the short term.",
        writeUp: "sandbox.html"
      },

      projectSandbox: {
        id: "Sandbox",
        title: "Sandbox Suites",
        developer: "Dominick Del Bosque",
        year: "2017",
        type: "Front End",
        screenshotUrl: '../../assets/images/sandbox.png',
        description: "Complete business identity for Coworking Space."
      }
    };

    var project = "";

    Fixtures.setProject = function(collection) {
      project = collection;
      console.log(project);
      return project;
    };

    Fixtures.getProject = function () {
      console.log(project);
      return project;
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
