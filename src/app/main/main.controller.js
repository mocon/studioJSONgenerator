(function() {
  'use strict';

  angular
    .module('simpleAdbuilder')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    
    var vm = this;
    
    vm.currentAd = {
      type: "studio",
      widths: {
        small: {
          align: "center",
          buttonAlign: "right"
        },
        medium: {
          align: "center",
          buttonAlign: "right"
        },
        large: {
          align: "center",
          buttonAlign: "right"
        }
      }
    };
    
    vm.editorWidths = {
      0: "small",
      1: "medium",
      2: "large",
      3: "x-large"
    };
    
    vm.currentEditingWidth = vm.editorWidths[0];
    
    vm.setEditingWidth = function(index){
      vm.currentEditingWidth = vm.editorWidths[index];
    }
    
    vm.alignAd = function(origin){
      vm.currentAd.widths[vm.currentEditingWidth].align = origin;
    }
    
    vm.alignButtons = function(side){
      vm.currentAd.widths[vm.currentEditingWidth].buttonAlign = side;
    }
    
  }
})();
