;(function(angular){
    "use strict";
angular.module("app", [])
.controller("mainController", function($scope) {
    
    $scope.onload = function(){
        $scope.pagename = "MY FIRST ANGULAR JS PAGE";
    }
    

});

})(angular);
