(function() {
  var app = angular.module('store-products', []);

  app.directive('productTitle', function() {
    return {
      // type of directive, E for HTML Element
      restrict: 'E',
      // URL of a template
      templateUrl: 'product-title.html'
    };
  });

  app.directive('productPanels', function() {
    return {
      restrict: 'E',
      templateUrl: 'product-panels.html',
      controller: function(){
        this.tab = 1;

        this.selectTab = function(setTab) {
          this.tab = setTab;
        }

        this.isSelected = function(checkTab) {
          return this.tab === checkTab;
        }
      },
      controllerAs: 'panel'
    };
  });
})();