/**
 * Created by Aimandis on 6/29/2016.
 */
hrApp.controller('JobEditController',['$scope','$http', '$routeParams', '$location', 'CommonResourcesFactoryBackup', 'JobService',
    function($scope, $http, $routeParams, $location, CommonResourcesFactoryBackup, JobService){
        $scope.back = function(){
            $location.url('/jobList');
        };

        JobService.findById($routeParams.jobId).then(function(result){
            $scope.job = result.data;
        });

        $scope.save = function(){
            $http.put(CommonResourcesFactoryBackup.addJobUrl, $scope.job)
                .success(function(data){
                })
                .error(function(data){
                    alert("The save didn't work");
                })
        }

}]);