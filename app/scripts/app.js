'use strict';

// Declare app level module which depends on views, and components
angular.module('myContacts', [
        'ngRoute',
        'firebase'
    ])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/contacts', {
                templateUrl: 'list.html',
                controller: 'ContactsCtrl'
            })
            .when('/contacts/new', {
                templateUrl: 'contact-new/contact-new.html',
                controller: 'NewContactsCtrl'
            })
            .when('/contacts/:id/edit', {
                templateUrl: 'contact-edit/contact-edit.html',
                controller: 'EditContactCtrl'
            })
            .when('/contacts/:id', {
                templateUrl: 'contact-delete/contact-delete.html',
                controller: 'DeleteContactCtrl'
            })
            .otherwise({
                redirectTo: '/contacts'
            });
    }]);