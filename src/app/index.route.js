(function() {
  'use strict';

  angular
    .module('simpleAdbuilder')
    .filter('printJson', function(){
      return function(input){
        var output = angular.toJson(input, true);
        return output;
      }
    })
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
