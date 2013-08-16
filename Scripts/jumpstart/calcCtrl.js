/// <reference path="../underscore-min.js" />

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
    $scope.expressionClosed = false;
    $scope.expression = '';
    $scope.currentOperation = null;
    $scope.input = function (char) {
        if ($scope.expressionClosed) $scope.clear();
        $scope.displayText = $scope.displayText * 10 + char * 1;
        $scope.expression += char;
    }

    $scope.evaluate = function () {
        if (!_.isNull($scope.currentOperation)) {
            $scope.currentOperation.evaluate();
        }
        $scope.expressionClosed = true;
        $scope.num1 = 0;
        $scope.num1Selected = false;
    }

    $scope.clear = function () {
        $scope.displayText = 0;
        $scope.num1 = 0;
        $scope.result = 0;
        $scope.num1Selected = false;
        $scope.expression = '';
        $scope.expressionClosed = false;
        $scope.currentOperation = null;
    }
    $scope.doCommonOperation = function (op, curOperation) {
        $scope.expression += op;
        if (!$scope.num1Selected) {
            $scope.num1 = $scope.displayText * 1;
            $scope.num1Selected = true;
        } else {
            $scope.currentOperation.evaluate();
        }
        $scope.expressionClosed = false;
        $scope.currentOperation = curOperation;
        $scope.displayText = 0;
    };
}];

function plusOperation($scope) {
    var self = this;
    self.op = '+';
    self.operate = function () { $scope.doCommonOperation(self.op, self) };
    self.evaluate = function () {
        $scope.displayText = $scope.num1 + $scope.displayText;
    }
};
function minusOperation($scope) {
    var self = this;
    self.op = '-';
    self.operate = function () { $scope.doCommonOperation(self.op, self) };
    self.evaluate = function () {
        $scope.displayText = $scope.num1 - $scope.displayText;
    }
};
function multiplyOperation($scope) {
    var self = this;
    self.op = '*';
    self.operate = function () { $scope.doCommonOperation(self.op, self) };
    self.evaluate = function () {
        $scope.displayText = $scope.num1 * $scope.displayText;
    }
};
function divisionOperation($scope) {
    var self = this;
    self.op = '/';
    self.operate = function () { $scope.doCommonOperation(self.op, self) };
    self.evaluate = function () {
        if ($scope.displayText > 0 || $scope.displayText < 0) {
            $scope.displayText = $scope.num1 / $scope.displayText;
        }
        else {
            $scope.displayText = "infinity";
            $scope.expressionClosed = true;
        }
    }
};
