roomExpApp.controller('settingCtrl', function($scope, $http) {

	var monthNames = [ "January", "February", "March", "April", "May", "June",
			"July", "August", "September", "October", "November", "December" ];

	var d = new Date();
	var day = d.getUTCDate();
	var firstDay = d.getDay();
	var month = monthNames[d.getMonth() - 1];
	$scope.monthName = function() {
		return month;
	}

	$scope.from = function() {
		return firstDay;
	}

	$scope.enable = function() {
		//console.log(day);
		if (day <= 10) {
			return true;
		} else {
			return false;
		}
	}

	$scope.showAlert = function() {
		$http({
			method : 'GET',
			url : '/resetDB'
		}).then(function successCallback(response) {
			$scope.msg = response.data;
		}, function errorCallback(response) {
			$scope.msg = response.data;
		});
	}

});