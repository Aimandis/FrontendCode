/**
 * Created by Aimandis on 6/29/2016.
 */
hrApp.controller('JobAddController', ['$scope', '$http', '$location', 'CommonResourcesFactoryBackup','EmployeeService','JobService','DepartmentService',
    function($scope, $http, $location, commonResourcesFactoryBackup, EmployeeService,JobService,DepartmentService){

        $scope.job = {};
        $scope.create = function(job){
            $http.post(commonResourcesFactoryBackup.addJobUrl, job)
                .success(function(data){
                    $location.url("/jobView/" + job.jobId);
                })
                .error(function(data){
                    alert("Could not save the job. Error " + data.status);
                })
        };

        $scope.reset = function(){
            this.job = {};
        }
    }

]);