(function () {
  function markdown(){

    var converter = new showdown.Converter();
    converter.setFlavor('github');

    return {
      restrict: 'E',

      link: function (scope, element, attributes) {
        var htmlText = converter.makeHtml(element.text());
        element.html(htmlText)
      }
    };
  }

  angular
    .module('portfolio')
    .directive('markdown', markdown);
})();
