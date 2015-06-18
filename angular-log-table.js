(function(){
  'use strict';

  angular.module('angular-log-console', []).config(function ($provide) {
    $provide.decorator('$log', function($delegate, $log) {

      var i, consoleMethods = ['assert', 'count', 'dir', 'dirxml', 'error', '_exception', 'group', 'groupCollapsed',
        'groupEnd', 'info', 'log', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];

      for (i = 0; i < consoleMethods.length; i++) {
        var methodName = consoleMethods[i];

        if (!$log[methodName]) {
          $delegate[methodName] = function(methodName) {
            var args = [].slice.call(arguments);
            if(window.console && window.console[methodName]) {
              console[methodName](args[0], args[1]);
            }
            else {
              $delegate.log(null, args);
            }
          };
        }
      }

      return $delegate;
    });
  });
}).call(this);
