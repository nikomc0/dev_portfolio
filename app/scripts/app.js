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
      .state('project', {
        url: '/project',
        controller: 'ProjectCtrl as project',
        templateUrl: '/templates/project.html'
      })
      .state('collection', {
        url: '/recent_work',
        controller: 'CollectionCtrl as collection',
        templateUrl: '/templates/collection.html'
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
