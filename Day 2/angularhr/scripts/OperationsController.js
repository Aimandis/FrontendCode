/**
 * Created by Aimandis on 6/24/2016.
 */

hrApp.controller('OperationsController',['$rootScope','$scope', function($rootScope,$scope){
    $scope.firstNumber = 0;
    $scope.secondNumber = 0;
    function checkValues(){
        if($scope.firstNumber == undefined)
            return false;
        if($scope.secondNumber == undefined)
            return false;
        return true;
    }

    function checkZero(){
        if($scope.firstNumber == 0)
            return false;
        return true;
    }

    $scope.sum = function(){
        if(checkValues()) {
            $scope.result = $scope.firstNumber + $scope.secondNumber;
        }
    };

    $scope.multiply = function(){
        if(checkValues()) {
            $scope.result = $scope.firstNumber * $scope.secondNumber;
        }
    };

    $scope.substract = function(){
        if(checkValues()) {
            $scope.result = $scope.firstNumber - $scope.secondNumber;
        }
    };

    $scope.divide = function(){
        if(checkValues() && checkZero()) {
            $scope.result = $scope.firstNumber/$scope.secondNumber;
        }
    }
}]);