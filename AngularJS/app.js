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

myApp.controller('StarshipController', function($scope, $http) {

    // Obtenemos la lista completa de naves
    $http.get('http://localhost/api/starship').then(function(response) {
        $scope.starships = response.data;
    }, function(error) {
        console.log(error);
    });

    // Función para eliminar una nave
    $scope.deleteStarship = function(starship) {
        $http.delete('http://localhost/api/starship/' + starship.id).then(function(response) {
            // Eliminamos la nave de la lista localmente
            var index = $scope.starships.indexOf(starship);
            if (index !== -1) {
                $scope.starships.splice(index, 1);
            }
        }, function(error) {
            console.log(error);
        });
    };

    $scope.getPilotShip = function (starship) {
        $http.get('http://localhost/api/pilotShip/' + starship.id).then(function(response) {
        $scope.pilotShips = response.data;
        console.log($scope.pilotShips)
    }, function(error) {
        console.log(error);
    });
    };

    $scope.deletePilotShip = function (pilotShip) {
        $http.delete('http://localhost/api/pilotShip/' + pilotShip.id).then(function(response) {
            var index = $scope.pilotShips.indexOf(pilotShip);
            if (index !== -1) {
                $scope.pilotShips.splice(index, 1);
            }
    }, function(error) {
        console.log(error);
    });
    };
});