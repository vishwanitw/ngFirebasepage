'use strict';

/**
 * @ngdoc function
 * @name nodeMongoResearchApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nodeMongoResearchApp
 */
angular.module('nodeMongoResearchApp')
  .controller('MainCtrl',['$scope', function ($scope) {

    $scope.addRecords = function (){
	    	console.log("insdie add");
	    }
  }]);
