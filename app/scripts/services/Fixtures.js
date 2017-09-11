(function () {
  function Fixtures() {

    var Fixtures = {};

    var projectBlocJams = {
        title: "Bloc Jams",
        developer: "Dominick Del Bosque",
        year: "2017",
        screenshotUrl: '/assets/images/SoundCloud.jpg',
        description: "Lorem Ipsum dolor..."
    };

    var projectSquatter = {
        title: "Squatter",
        developer: "Dominick Del Bosque",
        year: "2017",
        screenshotUrl: '../../assets/images/background-dark.jpg',
        description: "Lorem Ipsum dolor..."
    };


    Fixtures.getProjects = function () {
      return projectBlocJams;
    };

    Fixtures.getCollection = function (numberOfProjects) {
      this.projects = [];

      for (var i = 0; i < numberOfProjects; i++) {
        this.projects.push(angular.copy(projectBlocJams));
      }

      return this.projects;
    };

    return Fixtures;
  }

  angular
    .module('portfolio')
    .factory('Fixtures', Fixtures);
})();
