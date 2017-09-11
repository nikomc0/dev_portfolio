(function () {
  function Fixtures() {

    var Fixtures = {};

    var projects = {
      projectBlocJams: {
        title: "Bloc Jams",
        developer: "Dominick Del Bosque",
        year: "2017",
        type: "Front End",
        screenshotUrl: '/assets/images/SoundCloud.jpg',
        description: "Lorem Ipsum dolor..."
      },

      projectSquatter: {
        title: "Squatter",
        developer: "Dominick Del Bosque",
        year: "2017",
        type: "Front / Back End",
        screenshotUrl: '../../assets/images/background-dark.jpg',
        description: "Lorem Ipsum dolor..."
      },

      projectSquatter1: {
        title: "Squatter",
        developer: "Dominick Del Bosque",
        year: "2017",
        type: "Front / Back End",
        screenshotUrl: '../../assets/images/background-dark.jpg',
        description: "Lorem Ipsum dolor..."
      },

      projectBlocJams2: {
        title: "Bloc Jams",
        developer: "Dominick Del Bosque",
        year: "2017",
        type: "Front End",
        screenshotUrl: '/assets/images/SoundCloud.jpg',
        description: "Lorem Ipsum dolor..."
      },

      projectBlocJams4: {
        title: "Bloc Jams",
        developer: "Dominick Del Bosque",
        year: "2017",
        type: "Front End",
        screenshotUrl: '/assets/images/SoundCloud.jpg',
        description: "Lorem Ipsum dolor..."
      },

      projectSquatter3: {
        title: "Squatter",
        developer: "Dominick Del Bosque",
        year: "2017",
        type: "Front / Back End",
        screenshotUrl: '../../assets/images/background-dark.jpg',
        description: "Lorem Ipsum dolor..."
      }
    };



    Fixtures.getProjects = function () {
      return projectBlocJams;
    };

    Fixtures.getCollection = function (numberOfProjects) {
      this.projects = [];

      for (var projectName in projects) {
        console.log(projects[projectName]);
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
