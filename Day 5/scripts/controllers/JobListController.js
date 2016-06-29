/**
 * Created by Aimandis on 6/29/2016.
 */
hrApp.controller('JobListController', ['$scope', '$location', '$http', 'CommonResourcesFactoryBackup',
    function ($scope, $location , $http, CommonResourcesFactoryBackup) {
        $scope.jobs = [];

        $http({url: CommonResourcesFactoryBackup.findAllJobsUrl, method: 'GET'})
            .success(function (data, status, headers, config) {
                $scope.jobs = data;
            });

        $scope.editJob = function(jobId){
            $location.url('/jobEdit/' + jobId);
        };

        $scope.viewJob = function(jobId){
            $location.url('/jobView/' + jobId);
        }
    }]);