/**
 * Created by Aimandis on 6/29/2016.
 */
hrApp.controller('JobViewController', ['$scope', '$location', '$http', '$routeParams', 'CommonResourcesFactoryBackup', 'JobService',
    function ($scope, $location, $http, $routeParams, CommonResourcesFactoryBackup, JobService) {
        JobService.findById($routeParams.jobId)
            .then(function(result){
                $scope.job = result.data;
            });

        $scope.back = function(){
            $location.url('/jobList');
        };

        $scope.editJob = function(jobId){
            $location.url('jobEdit/' + jobId);
        }
    }]);    