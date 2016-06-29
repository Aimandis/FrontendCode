/**
 * Created by Aimandis on 6/29/2016.
 */
hrApp.service('JobService', ['$http', 'CommonResourcesFactoryBackup', function ($http, CommonResourcesFactoryBackup) {
    return {
        findById: function (jobId) {
            return $http.get(CommonResourcesFactoryBackup.findOneJobUrl + jobId)
                .success(function (data) {
                    return data;
                })
                .error(function (err) {
                    return {};
                });
        },

        findAll: function () {
            return $http.get(CommonResourcesFactoryBackup.findAllJobsUrl)
                .success(function (data, status, headers, config) {
                    return data;
                })
                .error(function (data, status, headers, config) {
                    alert("Error " + status);
                })
        }
    }
}]);