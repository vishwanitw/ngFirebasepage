'use strict';

/**
 * @ngdoc function
 * @name nodeMongoResearchApp.controller:AddRecordCtrl
 * @description
 * # AddRecordCtrl
 * Controller of the nodeMongoResearchApp
 */
angular.module('nodeMongoResearchApp')
  .controller('DisplayCtrl', ['$scope',"$firebaseArray", function ($scope, $firebaseArray) {
    console.log("insdie AddRecordCtrl");
    var ref = new Firebase("https://intense-heat-1064.firebaseio.com/details");
	  console.log('DisplayCtrl');
	  $scope.details = $firebaseArray(ref);
	  
  }]);    
