<script>
var dempoApp = angular.module('demoApp', []);

demoApp.controller('SimpleController', function ($scope) {
	$scope.clubs = [
		{ name: 'Real Mardid', country: "Spain"},
		{ name : 'Manchester United', country:"England"}
	];
});

</script>