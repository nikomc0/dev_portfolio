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
        description: "Real estate application that lets commercial property owners rent on the short term.",
        src: "/templates/writeUp/squatter.html",
        url: "http://www.squatter.us"
      },

      projectSandbox: {
        id: "Sandbox",
        title: "Sandbox Suites",
        developer: "Dominick Del Bosque",
        year: "2017",
        type: "Front End",
        screenshotUrl: '../../assets/images/sandbox.png',
        description: "Complete business identity for Coworking Space in San Francisco, CA.",
        src: "/templates/writeUp/sandbox.html",
        url: "http://www.sandboxsuites.com"
      },

      projectBlocJams: {
        id: "BlocJams",
        title:"Bloc Jams",
        developer:"Dominick Del Bosque",
        year:"2017",
        type:"Front End",
        screenshotUrl:"",
        description: "Music player that recreates the functionality of Spotify.",
        src:"",
        url: "https://bloc-jams-dominick.netlify.com/index.html"
      },

      projectBlocChat: {
        id:"",
        title:"",
        developer:"",
        year:"",
        type:"",
        screenshotUrl:"",
        description:"",
        src:"",
        url:""
      }
    };

    Fixtures.setProject = function(collection) {
      Fixtures.project = collection;
      Fixtures.currentProject = collection;
      console.log(Fixtures.project);
      return Fixtures.project;
    };

    Fixtures.getProject = function () {

      return Fixtures.currentProject;
    };

    Fixtures.getCollection = function () {
      this.projects = [];

      for (var projectName in projects) {
        this.projects.push(angular.copy(projects[projectName]));
      }
      return this.projects;
    };

    Fixtures.project = null;
    Fixtures.currentProject = null;

    return Fixtures;
  }

  angular
    .module('portfolio')
    .factory('Fixtures', Fixtures);
})();
