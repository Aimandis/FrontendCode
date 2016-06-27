hrApp.controller('MathController', ['$scope','MathService', function($scope,MathService){

    $scope.calculate = function() {
//        TODO #8 calculate op1, op2, op3, op4
        $scope.op1 = MathService.add($scope.firstnumber, $scope.secondnumber);
        $scope.op2 = MathService.substract($scope.firstnumber,$scope.secondnumber);
        $scope.op3 = MathService.multiply($scope.firstnumber,$scope.secondnumber);
        $scope.op4 = MathService.divide($scope.firstnumber,$scope.secondnumber);
//        TODO #13 refactor your calculations using MathService
    }

}]);
