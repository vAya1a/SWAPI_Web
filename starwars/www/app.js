var myApp = angular.module('myApp', ['ngRoute'])
.config(function ($routeProvider) {
    $routeProvider
    .when("/",{
        templateUrl: "home.html"
    })
    .when("/pilotos", {
        templateUrl: "pilot.html"
    })
    .when("/naves",{
        templateUrl: "starship.html"
    })
    .when("/about", {
        templateUrl: "about.html"
    })
});

//Controlador Angular de Pilot
myApp.controller('PilotController', function ($scope, $http) {

    $scope.sortType = 'nombre';
    $scope.sortReverse = false;
    $scope.buscar = '';

    $scope.curPage = 1,
    $scope.itemsPerPage = 9,
    $scope.maxSize = 5;

    // Obtenemos la lista completa de pilotos
    $http.get('http://34.200.116.5/api/pilot').then(function (response) {
        $scope.pilots = response.data;

        $scope.numOfPages = function () {
            return Math.ceil($scope.pilots.length / $scope.itemsPerPage);
        };
    
        $scope.$watch('curPage + numPerPage', function() {
            var begin = (($scope.curPage - 1) * $scope.itemsPerPage),
            end = begin + $scope.itemsPerPage;
             
            $scope.pilots = $scope.pilots.slice(begin, end);
            });


    }, function (error) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            
          })
    });

    // Función para eliminar un piloto
    $scope.deletePilot = function (pilot) {
        Swal.fire({
            title: '¿Estas seguro de designarlo?',
            text: "¡No podrás revertirlo!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '¡Sí, designalo!',
            //Si se confirma te salta la alerta de confirmación mientras se realiza la consulta HTTP delete 
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    '¡Designado!',
                    'El piloto fué despedido.',
                    'success'
                )

                $http.delete('http://34.200.116.5/api/pilot/' + pilot.id).then(function (response) {
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
                // Si se cancela saltara la alerta de salvado
            }else{
                swal.fire(
                  'Cancelado',
                  'Tu piloto está a salvo :)',
                  'error'
                )
              }
        })
    };

    // Función la cual obtiene el id del piloto y de la nave y realiza la asignación
    $scope.assignPilot = function (selectedPilot) {
        //Obtiene los id's necesarios
        var data = {
            id_pilot: selectedPilot,
            id_starship: $scope.verNave.id
        };
        // Realiza una petición HTTP post para realizar la asignación del piloto y saltará una alerta dependiendo de si se realizó o no correctamente.
        $http.post('http://34.200.116.5/api/pilotShip', data).then(function (response) {
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

// Controlador angular de Starships
myApp.controller('StarshipController', function ($scope, $http) {
    $scope.sortType = 'nombre';
    $scope.sortReverse = false;
    $scope.buscar = '';

    // Obtenemos la lista completa de naves
    $http.get('http://34.200.116.5/api/starship').then(function (response) {
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
        $http.get('http://34.200.116.5/api/starship/' + starship.id).then(function (response) {
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
        $http.delete('http://34.200.116.5/api/starship/' + starship.id).then(function (response) {
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
        $http.get('http://34.200.116.5/api/starship/' + starship.id).then(function (response) {
            $scope.sNave = response.data
        }, function (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                
              })
        });
        // Obtiene los pilotos asignados a una nave
        $http.get('http://34.200.116.5/api/pilotShip/' + starship.id).then(function (response) {
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
        // Te salta una alerta la cual te cuestiona si estás seguro de eliminar la relacion entre pìloto y nave
        Swal.fire({
            title: '¿Estas seguro de designarlo?',
            text: "¡No podrás revertirlo!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '¡Sí, designalo!',
            //Si se confirma te salta la alerta de confirmación mientras se realiza la consulta HTTP delete 
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    '¡Designado!',
                    'El piloto fué designado.',
                    'success'
                )

                $http.delete('http://34.200.116.5/api/pilotShip/' + pilotShip.id).then(function (response) {
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
                // Si se cancela saltara la alerta de salvado
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


});

//Controlador del Navbar

angular.controller('NavbarController', ['$location', function($location) {
    this.isActive = function(path) {
      return ($location.path() === path);
    };
  }]);
  