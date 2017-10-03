var app = angular.module('eneida', []);



app.controller('Eneida', function($scope, $http) {


    $http.get('http://localhost:3000').
        then(function(response) {
            // console.log(response.data);
            $scope.poem = response.data;
        });
    
    $scope.deleteQuote = function(event){
        let id = event.target.name;
        let data = JSON.stringify({data:{id: id}});
        console.log(data);
        $http.delete('http://localhost:3000', data).
            then(function(response){
                $scope.poem = response.data;
            });
    }
});

app.directive('showRow', function(){
    return {
        templateUrl: 'view/showrow.html',
        replace: true
    }
});