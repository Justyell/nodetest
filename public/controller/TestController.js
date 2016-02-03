	var app = angular.module('myApp',['ngRoute']);
	
	app.config(['$routeProvider',function($routeProvider){
		
		$routeProvider.when('/',{
			
			templateUrl: '../public/segment/segment1.html',
			controller: 'OneController'
		}).
		when(
			'/b2',{
			
			templateUrl: '../public/segment/segment2.html',
			controller: 'TwoController'
			}
		).
		otherwise({
			templateUrl: '../public/segment/segment3.html',
			controller: 'ThreeController'
			
		}

		);
	}]);
	
	
	app.controller('name',function($scope){
	
		//console.log("your name is" + $scope.name);
		
		$scope.text = function(){
			return $scope.name;
		}
	});
	
	app.controller('getServerData',function($scope,$http){
		var getdata;
		//console.log("your name is" + $scope.name);
		$scope.clickFun = function(){
			console.log("click is in!");
			$http.get('/myindex').success(function(data){
			console.log(data);
			return $scope.data = data
			
		});
	}
		
		/*
		$scope.getdata = function(){
			return $scope.data = "this is data controller!";
		}
		*/
		
	});
///////////////div change	
	app.controller('OneController',function($scope,$location){
		$scope.b1 = function(){
			console.log('page 1');
			$location.path('/');
		}
		
	});
	
	app.controller('TwoController',function($scope,$location){
		$scope.b2 = function(){
			console.log('page2');
			$location.path('/b2');
		}
		
	});
	
	app.controller('ThreeController',function($scope,$location){
		
		$scope.b3 = function(){
		console.log('page3');
		$location.path('/b3');
		}
	});
///////////////////////////////

	app.controller('connDBController',function($scope,$http){
		$scope.connButton = function(){
			console.log("function in!");
			$http.get('/db').success(function(data){
				
				console.log(data);
			});
		}
	});


