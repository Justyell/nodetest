	var app = angular.module('another',[]);
	app.controller('getServerData',function($scope){
	
		//console.log("your name is" + $scope.name);
		$scope.getdata = function(){
			return $scope.data = "this is data controller!";
		}
	});