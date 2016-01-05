'use strict';

/**
 * @ngdoc function
 * @name nodeMongoResearchApp.controller:AddRecordCtrl
 * @description
 * # AddRecordCtrl
 * Controller of the nodeMongoResearchApp
 */
angular.module('nodeMongoResearchApp')
  .controller('AddRecordCtrl', ['$scope',"$firebaseArray", function ($scope, $firebaseArray) {
    console.log("insdie AddRecordCtrl");
    var ref = new Firebase("https://intense-heat-1064.firebaseio.com/details");
	  $scope.details = $firebaseArray(ref);
		  $scope.addMessage = function() {
		    $scope.details.$add({
		      name: $scope.newDetailsName,
		      email : $scope.newDetailsEmail,
		      address : $scope.newDetailsAdress
		    });
		  };

		  // $scope.details = '';
  }]);    
