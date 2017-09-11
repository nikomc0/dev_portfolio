(function() {
  function config($stateProvider, $locationProvider) {
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      });
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '/templates/home.html'
      })
      .state('projects', {
        url: '/projects',
        controller: 'ProjectCtrl as project',
        templateUrl: '/templates/projects.html'
      })
      .state('blog', {
        url: '/blog',
        templateUrl: '/templates/blog.html'
      });
  }

angular
  .module('portfolio', ['ui.router'])
  .config(config);
})();
