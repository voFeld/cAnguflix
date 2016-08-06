app.controller('allMoviesCtrl', function($scope, moviesService) {

    $scope.movies = moviesService.allMovies;

    $scope.addToMyCollection = function(movie){
        moviesService.addToMyCollection(movie);
    }
});