(function () {
    'use strict';

    function contentTypeInfoController($scope, $routeParams, userService, dateHelper) {

        var vm = this;
        vm.showInfo = true;

        function init() {

            if ($routeParams.create) {
                vm.showInfo = false;
            }

            if (vm.showInfo) {
                vm.key = $scope.model.key;
                vm.id = $scope.model.id;
                vm.udi = $scope.model.udi;
                userService.getCurrentUser().then(currentUser => {
                    vm.createDate = dateHelper.getLocalDate($scope.model.createDate, currentUser.locale, 'LLL');
                    vm.updateDate = dateHelper.getLocalDate($scope.model.updateDate, currentUser.locale, 'LLL');
                });
            }

        }

        init();
    }

    angular.module('umbraco')
        .controller('Our.Umbraco.ContentTypeInfoController', contentTypeInfoController);
})();