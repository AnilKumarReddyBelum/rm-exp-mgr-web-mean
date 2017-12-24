roomExpApp.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/overview', {
		templateUrl : '/templates/overview.html'
	}).when('/metrics', {
		templateUrl : '/templates/metrics.html'
	}).when('/authors', {
		templateUrl : '/templates/authors.html'
	}).when('/settings', {
		templateUrl : '/templates/settings-1.html'
	}).otherwise({
		redirectTo : '/overview'
	});

} ]);
