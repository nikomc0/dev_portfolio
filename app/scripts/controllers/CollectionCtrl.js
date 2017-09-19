(function () {
  function CollectionCtrl(Fixtures){
    this.pageTitle = "RECENT WORK";
    this.projects = Fixtures.getCollection();
    this.test = function(collection) {
      Fixtures.setProject(collection);
    };
  }

  angular
    .module('portfolio')
    .controller('CollectionCtrl', ['Fixtures', CollectionCtrl]);
})();
