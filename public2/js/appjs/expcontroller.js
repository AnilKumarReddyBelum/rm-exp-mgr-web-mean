//Controller Part
roomExpApp.controller("expManagementController", function ($scope, $http) {
	// Initialize page with default data which is blank in this example
	var chanduTotal = 0;
	var anilTotal = 0;
	var total = 0;
	$scope.expenses = [];
	var saveMsg = null;
	var owner = null;


	$scope.form = {
		_id: undefined,
		owner: undefined,
		cost: undefined,
		time: undefined
	};

	// Now load the data from server
	_refreshPageData();

	// HTTP POST/PUT methods for add/edit employee
	$scope.sbmitExpenseRecord = function () {
		var method = "";
		var url = "";
		if ($scope.form.id == undefined) {
			method = "POST";
			url = '/createExpense';
		}

		$http({
			method: method,
			url: url,
			data: angular.toJson($scope.form),
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(_success, _error);
	};

	// HTTP GET- get all employees collection
	function _refreshPageData() {
		$http({
			method: 'GET',
			url: '/getExpenseRecords'
		}).then(function successCallback(response) {
			angular.copy(response.data, $scope.expenses);
		}, function errorCallback(response) {
		});
	}

	// After success operation
	function _success(response) {
		saveMsg = 'SUCCESS';
		//console.log($scope.saveMsg);
		_refreshPageData();
		_clearForm();
	}

	// Form error
	function _error(response) {
		saveMsg = 'ERROR';
		//console.log(response.statusText);
	}


	$scope.saveMsg = function () {
		//console.log(saveMsg);
		return saveMsg;
	}

	// Clear the form
	function _clearForm() {
		$scope.form.owner = "";
		$scope.form.cost = "";
	}
	;

	$scope.getTotal = function () {
		total = 0;
		for (var i = 0; i < $scope.expenses.length; i++) {
			var expense = $scope.expenses[i];
			total = total + expense.cost;
		}
		return total;
	}
	$scope.getAnilTotal = function () {
		anilTotal = 0;
		for (var i = 0; i < $scope.expenses.length; i++) {
			var expense = $scope.expenses[i];
			if (expense.owner.indexOf("Anil")) {
				anilTotal = anilTotal + expense.cost;
			}
		}
		
		return anilTotal;
	}

	$scope.getChanduTotal = function () {
		chanduTotal = 0;
		for (var i = 0; i < $scope.expenses.length; i++) {
			var expense = $scope.expenses[i];
			if (expense.owner.indexOf("Chandra")) {
				chanduTotal = chanduTotal + expense.cost;
			}
		}
		
		return chanduTotal;
	}
	
	$scope.getChanduStatus = function () {

		

		if (anilTotal > chanduTotal) {
			return anilTotal - chanduTotal;
		} else if (anilTotal == chanduTotal) {
			return 0;
		} else {
			return anilTotal - chanduTotal;
		}
	}

	$scope.getAnilStatus = function () {
		if (anilTotal < chanduTotal) {
			return chanduTotal - anilTotal;
		} else if (anilTotal == chanduTotal) {
			return 0;
		} else {
			return chanduTotal - anilTotal;
		}
	}

});
