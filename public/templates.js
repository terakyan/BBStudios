angular.module('templates').run(['$templateCache', function($templateCache) {$templateCache.put('number-spinner/number-spinner.html','<input type="number" ng-model="$ctrl.count">');}]);