var myApp = angular.module('myApp', []);

myApp.controller('PilotController', function($scope, $http) {

    // Obtenemos la lista completa de pilotos
    $http.get('http://localhost/api/pilot').then(function(response) {
        $scope.pilots = response.data;
    }, function(error) {
        console.log(error);
    });

    // Función para eliminar un piloto
    $scope.deletePilot = function(pilot) {
        $http.delete('http://localhost/api/pilot/' + pilot.id).then(function(response) {
            // Eliminamos el piloto de la lista localmente
            var index = $scope.pilots.indexOf(pilot);
            if (index !== -1) {
                $scope.pilots.splice(index, 1);
            }
        }, function(error) {
            console.log(error);
        });
    };

});
