/**
 * Created by Aimandis on 6/27/2016.
 */
hrApp.controller('UserController',['$scope','$location',function($scope,$location){

    $scope.users = [];
    $scope.hidden = true;

    $scope.back = function(){
        $location.url('/');
    }
    $scope.reset = function(){
        $scope.firstName = "";
        $scope.lastName = "";
        $scope.id = "";
        $scope.age = "";
    }

    $scope.save = function(){
        var obj = {};
        obj.firstName = $scope.firstName;
        obj.lastName = $scope.lastName;
        obj.id = $scope.id;
        obj.age = $scope.age;
        $scope.users.push(obj);
        $scope.reset();
    }

    $scope.hide = function(){
        if($scope.hidden == false)
            $scope.hidden = true;
        else
            $scope.hidden = false;
    }
}]);