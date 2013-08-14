function BookLibCtrl_Demo4($scope) {
    $scope.bookList = [
{ 'name': 'Beginning Android 4 Application Development', 'auther': 'Wei-Meng Lee', 'price': 479 },
{ 'name': 'Beginning iOS 5: Application Development', 'auther': 'Wei-Meng Lee', 'price': 418 },
{ 'name': 'Beginning Android Tablet Application Development', 'auther': 'Wei-Meng Lee', 'price': 276 },
{ 'name': 'The Algorithm Design Manual', 'auther': 'Steven S. Skiena', 'price': 671 },
{ 'name': 'Programming Challenges: The Programming Contest Training Manual', 'auther': 'Steven S. Skiena', 'price': 3789 },
{ 'name': 'ASP.NET 4 Unleashed', 'auther': 'Stephen Walther', 'price': 680 },
{ 'name': 'ASP.NET MVC Framework Unleashed', 'auther': 'Stephen Walther', 'price': 1050 },
{ 'name': 'Windows 8 Apps with HTML5 and JavaScript Unleashed', 'auther': 'Stephen Walther', 'price': 2519 }];

    $scope.orderProp = '';    
    $scope.reverse = true;
    $scope.updateOrderBy = function (orderby) {
        $scope.orderProp = orderby;
        $scope.reverse = !$scope.reverse;
    }

};

function BookLibCtrl_Demo5($scope, $http) {
    $scope.bookList = new Array();

    $scope.orderProp = '';
    $scope.loadBooks = function () {
        $http.get("Scripts/jumpstart/bookList.json").success(
            function (data) {
                $scope.bookList = data;
            }
            );
    }
    $scope.reverse = true;
    $scope.updateOrderBy = function (orderby) {
        $scope.orderProp = orderby;
        $scope.reverse = !$scope.reverse;
    }

};