app.controller('myCollectionCtrl', function($scope, moviesService) {

    var years = []; for(var i = 1982; i <= 2016; i++){years.push(i)}
    $scope.years = years;

    $scope.movies = moviesService.myCollection;

    $scope.trashClicked = false;

    $scope.$watch(moviesService.getBudget, function(newB, oldB){
        $scope.budget = newB;
    });
    $scope.$watch(moviesService.isOutOfBudget, function(newB, oldB){
        $scope.outOfBudget = newB;
    });

    $scope.showRemoveOption = function(){
        $scope.trashClicked = !$scope.trashClicked;
    };

    $scope.removeFromMyColletion = function(movie){
        moviesService.removeFromMyColletion(movie);
    }

});