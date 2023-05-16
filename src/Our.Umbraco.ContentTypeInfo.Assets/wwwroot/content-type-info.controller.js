(function () {
    'use strict';

    function contentTypeInfoController($scope, $routeParams) {

        var vm = this;
        vm.showInfo = true;

        function init() {
            vm.key = $scope.model.key;
            vm.id = $scope.model.id;
            vm.createDate = $scope.model.createDate;
            vm.updateDate = $scope.model.updateDate;
            vm.udi = $scope.model.udi;

            if ($routeParams.create) {
                vm.showInfo = false;                
            }
        }

        init();
    }

    angular.module('umbraco')
        .controller('Our.Umbraco.ContentTypeInfoController', contentTypeInfoController);
})();