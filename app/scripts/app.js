(function() {
  function config($stateProvider, $locationProvider) {
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      });
    $stateProvider
      .state('landing', {
        url: '/',
        controller: 'LandingCtrl as landing',
        templateUrl: '/templates/landing.html'
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
