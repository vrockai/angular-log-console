#angular-log-table
Extend the $log service with the methods from the browser debugging console object. The project is based on the
[angular-log-table](https://github.com/codevinsky/angular-log-table) plugin by [Jeremy Dowell](https://github.com/codevinsky).

### Install
Either copy angular-log-console.js to your project, or if you're doing front-end right, use bower:
    
    $ bower install --save angular-log-console

###Usage

First, add *angular-log-console* to your module's dependencies

    angular.module('myApp', ['angular-log-console'])

Next, call $log.* methods from your controller with an array of objects, i.e.:

    angular.module('myApp')
    .controller('MyCtrl', function($scope, $log) {
      $scope.statistics = [
        {firstName: 'John', lastName: 'Smith', age: 'Unknown' },
        {firstName: 'Amelia', lastName: 'Pond', age: 22 },
        {firstName: 'Rory', lastName: 'Williams', age: 21 }
      ];

      $log.table($scope.statistics)
    });

This will produce the following in the chrome developer console
![demo image 1](http://i.imgur.com/UDl3twL.png)

To learn more about ethods available on the console object, visit [Console Web API Interfaces page](https://developer.mozilla.org/en/docs/Web/API/console).

#### Plucking fields in $log.table
If you'd don't want all of the fields displayed, you can pluck the required fields by passing in an array of field names as the second argument:

    $log.table($scope.statistics, ['firstName', 'lastName']);

### Update notes:
- **0.0.1**
    -  First release
