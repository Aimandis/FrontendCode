/**
 * Created by Aimandis on 6/24/2016.
 */

hrApp.controller('DescriptionController',function($rootScope, $scope){
    $scope.title= 'Two Way Binding Demo';
    $scope.childtemplate='templates/childscope.html';
    $scope.resetFirstVariable = function(){
        $scope.firstVariable=undefined;
    };
    $scope.setFirstVariable= function(val){
        $scope.firstVariable = val;
    };

    $scope.toggleDescriptionHide = function(){
        if($scope.descriptionHide == true)
            $scope.descriptionHide = false;
        else
            $scope.descriptionHide = true;
    }
    
});