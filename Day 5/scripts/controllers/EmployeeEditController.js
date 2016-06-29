hrApp.controller('EmployeeEditController', ['$scope', '$http', '$routeParams', '$location', 'CommonResourcesFactoryBackup','JobService','EmployeeService','DepartmentService',
    function ($scope, $http, $routeParams, $location, commonResourcesFactoryBackup, JobService, EmployeeService, DepartmentService) {
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";

        //TODO #HR5
        $scope.employee = {};
        $scope.managers = {};
        // $scope.managers = EmployeeService.findAll();

        EmployeeService.findAll().then(function(response){
            $scope.managers = response.data;
        });

        $scope.jobs = {};
        JobService.findAll().then(function(response){
            $scope.jobs = response.data;
        });
        $scope.departments = {};
        DepartmentService.findAll().then(function(response){
            $scope.departments = response.data;
        });

        EmployeeService.findById($routeParams.employeeId)
            .then(function (res) {
                $scope.employee = res.data;
            }, function (err) {
                console.log("Error at employees/findOne: " + err);
            });

        /**
         * Reset form
         */
        $scope.reset = function () {
            $scope.employee = {};
        };

        /**
         * Persist an employee
         * @param addEmployee - employee to be persisted
         */
        $scope.create = function (addEmployee) {
            $http({url: commonResourcesFactoryBackup.editEmployeeUrl, method: 'PUT', data: addEmployee})
                .success(function (data) {
                    $scope.employee = data;
                    $location.url('/employeeView/' + $scope.employee.employeeId);
                });
        };
        
        

        $scope.datePattern = /^\d{4}-\d{2}-\d{2}$/;
        $scope.commissionPattern =  /^[0]\.\d{1}(\d)?$/;

    }]);