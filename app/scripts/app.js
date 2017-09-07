(function() {
  function config($stateProvider, $locationProvider) {
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      });
    $stateProvider
      .state('projects', {
        url: '/projects',
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
