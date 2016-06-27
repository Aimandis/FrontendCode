/**
 * Created by Aimandis on 6/24/2016.
 */
hrApp.controller('ChildController',['$rootScope', '$scope', function($rootScope,$scope){


    $scope.setTitle = function(){
        $scope.$parent.title = "Sunt imprevizibile";
        //de ce nu merge aici sa folosesc
        //$rootScope.title = "Sunt imprevizibile";
    }
}]);