(function() {
  'use strict';

  angular
    .module('simpleAdbuilder')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
