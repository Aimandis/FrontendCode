/**
 * Created by Aimandis on 6/28/2016.
 */

hrApp.controller('FormsController', ['$scope', function($scope){
    $scope.error = "";
   
    $scope.checkform = function(){
        if($scope.userType == undefined ||
        $scope.myForm.input.$valid == false)
            $scope.error = "It's wrong";
        else{
            $scope.error = "Saved";
            $scope.userType = "";
        }
    }
}]);