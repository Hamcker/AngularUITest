angular.module("Jimli", ['ui.router'])
	.config(function ($stateProvider, $urlRouterProvider,$http) {
		$stateProvider
			.state('root', {
				abstract: true,
				url: '/',
			})
			.state('root.index', {
				url: '',
				templateUrl: '/sp/index',
				controller: 'indexCtrl'
			})
			.state('root.index', {
				url: '',
				templateUrl: '/sp/index',
				controller: 'indexCtrl'
			})
    })
	.controller('indexCtrl',function($scope) {
		$scope.message = 'Hello UI - Index'
	});