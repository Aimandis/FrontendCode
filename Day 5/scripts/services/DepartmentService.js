/**
 * Created by Aimandis on 6/29/2016.
 */
hrApp.service('DepartmentService', ['$http', 'CommonResourcesFactoryBackup', function($http, CommonResourcesFactoryBackup){
    return{
        findAll: function(){
            return $http.get(CommonResourcesFactoryBackup.findAllDepartmentsUrl)
                .success(function(data){
                    return data;
                })
                .error(function(data, status,headers, config){
                    alert("Error " + status);
                });

        }
    }
}]);