angular.module('calculator', [])
.controller('CalculatorCtrl', function($scope){
	$scope.result = '';

	$scope.btnClicked = function(btn){		
		if (btn == 'C'){
			$scope.result = '';
		}
		else if (btn == '='){
			$scope.result = eval($scope.result);
		}
		else{
			$scope.result += btn;	
		}		
	};
});