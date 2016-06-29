hrApp.controller('MenuController', ['$scope', 'EmployeeActionsService', function ($scope, EmployeeActionsService) {
    /*
    $scope.employeeActionList = [{
        url:'#/employeeslist',
        label:'Employee List'
    }];
    */
    $scope.jobsActionList = [{
        url:'#/jobList',
        label: 'Job List'
    },
        {
            url: '#/jobAdd',
            label: 'Add job'
        }];
    $scope.employeeActionList = EmployeeActionsService;
    $scope.currentDate = new Date();
}]);
