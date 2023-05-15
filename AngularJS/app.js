var myApp = angular.module('myApp', []);

myApp.controller('PilotController', function ($scope, $http) {

    // Obtenemos la lista completa de pilotos
    $http.get('http://localhost/api/pilot').then(function (response) {
        $scope.pilots = response.data;
    }, function (error) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            
          })
    });

    // Función para eliminar un piloto
    $scope.deletePilot = function (pilot) {
        $http.delete('http://localhost/api/pilot/' + pilot.id).then(function (response) {
            // Eliminamos el piloto de la lista localmente
            var index = $scope.pilots.indexOf(pilot);
            if (index !== -1) {
                $scope.pilots.splice(index, 1);
            }
        }, function (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                
              })
        });
    };

    $scope.assignPilot = function (selectedPilot) {
        var data = {
            id_pilot: selectedPilot,
            id_starship: $scope.verNave.id
        };
        $http.post('http://localhost/api/pilotShip', data).then(function (response) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Se ha asignado el piloto',
                showConfirmButton: false,
                timer: 1500
            })
        }, function (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
              })
        });
    };

});

myApp.controller('StarshipController', function ($scope, $http) {


    // Obtenemos la lista completa de naves
    $http.get('http://localhost/api/starship').then(function (response) {
        $scope.starships = response.data;
    }, function (error) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Quizas no hay datos'
          })
    });

    //Función para mostrar una nave por su id
    $scope.showStarship = function (starship) {
        $http.get('http://localhost/api/starship/' + starship.id).then(function (response) {
            $scope.verNave = response.data
        }, function (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                
              })
        });
    };

    // Función para eliminar una nave
    $scope.deleteStarship = function (starship) {
        $http.delete('http://localhost/api/starship/' + starship.id).then(function (response) {
            // Eliminamos la nave de la lista localmente
            var index = $scope.starships.indexOf(starship);
            if (index !== -1) {
                $scope.starships.splice(index, 1);
            }
        }, function (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                
              })
        });
    };

    // Función para obtener los pilotos asignados a una nave
    $scope.getPilotShip = function (starship) {
        // mostrar una nave por su id
        $http.get('http://localhost/api/starship/' + starship.id).then(function (response) {
            $scope.sNave = response.data
        }, function (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                
              })
        });
        $http.get('http://localhost/api/pilotShip/' + starship.id).then(function (response) {
            $scope.pilotShips = response.data;
        }, function (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                
              })
        });
    };

    // Función para eliminar la relacion de un piloto y una nave
    $scope.deletePilotShip = function (pilotShip) {
        Swal.fire({
            title: '¿Estas seguro de designarlo?',
            text: "¡No podrás revertirlo!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '¡Sí, designalo!',
            
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    '¡Designado!',
                    'El piloto fué designado.',
                    'success'
                )

                $http.delete('http://localhost/api/pilotShip/' + pilotShip.id).then(function (response) {
                    // Eliminamos la nave de la lista localmente
                    var index = $scope.pilotShips.indexOf(pilotShip);
                    if (index !== -1) {
                        $scope.pilotShips.splice(index, 1);
                    }
                }, function (error) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                        
                      })
                });
            }else{
                swal.fire(
                  'Cancelado',
                  'Tu piloto está a salvo :)',
                  'error'
                )
              }
        })
    };

    // Función para pasar a base 15 los precios de las naves.
    $scope.convertToBase15 = function (price) {
        // Array de los simbolos de base 15
        const base15Symbols = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '\u00DF', '\u00DE', '\u00A2', '\u00B5', '\u00B6'];
        // Se almacenan los precios a tipo int
        let base10Price = parseInt(price);
        let base15Price = '';
        // Cambiamos a base 15 el precio
        while (base10Price > 0) {
            let remainder = base10Price % 15;
            base15Price = base15Symbols[remainder] + base15Price;
            base10Price = Math.floor(base10Price / 15);
        }
        return base15Price;
    };

    // Función para crear la relacion entre un piloto y una nave.






});