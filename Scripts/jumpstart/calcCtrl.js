var calcCtrl = ['$scope', function ($scope) {
    $scope.numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    $scope.operations = [
        new plusOperation($scope),
        new minusOperation($scope),
        new multiplyOperation($scope),
        new divisionOperation($scope)];
    $scope.displayText = 0;
    $scope.num1 = 0;
    $scope.result = 0;
    $scope.num1Selected = false;

    $scope.input = function (char) {
        $scope.displayText = $scope.displayText*10 + char;
    }

    $scope.evaluate = function () {
        $scope.displayText = $scope.num1 + $scope.displayText;
    }

    $scope.clear = function() {
        $scope.displayText = 0;
        $scope.num1 = 0;
        $scope.result = 0;
        $scope.num1Selected = false;
    }
}];

function plusOperation($scope) {
    var self = this;
    self.op = '+';
    self.evaluate = function () {
        if (!$scope.num1Selected) {
            $scope.num1 = $scope.displayText;
            $scope.num1Selected = true;
        } else {
            $scope.num1 = $scope.num1 + $scope.displayText;
        }
        $scope.displayText = 0;
    };
};
function minusOperation($scope) {
    var self = this;
    self.op = '-';
    self.evaluate = function () {
        if (!$scope.num1Selected) {
            $scope.num1 = $scope.displayText * 1;
        } else {
            $scope.num1 = $scope.num1 - $scope.displayText;
        }
        $scope.displayText = 0;
    };
};
function multiplyOperation($scope) {
    var self = this;
    self.op = '*';
    self.evaluate = function () {
        if (!$scope.num1Selected) {
            $scope.num1 = $scope.displayText * 1;
        } else {
            $scope.num1 = $scope.num1 * $scope.displayText;
        }
        $scope.displayText = 0;
    };
};
function divisionOperation($scope) {
    var self = this;
    self.op = '/';
    self.evaluate = function () {
        if (!$scope.num1Selected) {
            $scope.num1 = $scope.displayText * 1;
        } else {
            $scope.num1 = $scope.num1 / $scope.num2;
        }
        $scope.displayText = 0;
    };
};
