var app = angular.module('eneida', []);

app.controller('Eneida', function($scope, $http) {

    $http.get('http://localhost:3000').then(function(response) {
        // console.log(response.data);
        $scope.poem = response.data;
    });

    $scope.editQuote = function(event) {
        let id = event.target.name;
        let edit = $scope.poem.find(function(element){
            return element._id == id;
        });
        //console.log(edit.quote);
        var req = {
            method: 'PUT',
            url: 'http://localhost:3000',
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            },
            data: {
                id: id,
                quote: edit.quote
            }
        }
//         console.log(req);
        $http(req).then(function(response) {
            $scope.poem = response.data;
        });
    }

    $scope.deleteQuote = function(event) {
        let id = event.target.name;
        var req = {
            method: 'DELETE',
            url: 'http://localhost:3000',
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            },
            data: {
                id: id
            }
        }
        //console.log(req);
        $http(req).then(function(response) {
            $scope.poem = response.data;
        });
    }

    $scope.quote = {};
    $scope.createQuote = function() {
        var req = {
            method: 'POST',
            url: 'http://localhost:3000',
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            },
            data: $scope.quote
        }
        //console.log(req);
        $http(req).then(function(response) {
            $scope.poem = response.data;
        });
    }
});

app.directive('showRow', function() {
    return {
        templateUrl: 'view/showrow.html',
        replace: true
    }
});
