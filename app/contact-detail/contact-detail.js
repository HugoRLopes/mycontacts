'use strict';

angular.module('myContacts')
    .controller('ContactsCtrl', function ($scope, $firebaseArray) {
        var ref = new Firebase('hugocontacts-app.firebaseIO.com/contacts');

        // Get contacts
        $scope.contacts = $firebaseArray(ref);

        // Hide/Show Form
        $scope.addFormShow = false;

        $scope.showAddForm = function () {
            $scope.addFormShow = !$scope.addFormShow;
        };

        // Submit contact
        $scope.addFormSubmit = function () {
            console.log("adding contacts");

            var name = $scope.name || null,
                email = $scope.email || null,
                company = $scope.company || null,
                mobile_phone = $scope.mobile_phone || null,
                home_phone = $scope.home_phone || null,
                work_phone = $scope.work_phone || null,
                street_address = $scope.street_address || null,
                city = $scope.city || null,
                state = $scope.state || null,
                zip_code = $scope.zip_code || null;

            // Build Object
            $scope
                .contacts.$add({
                name: name,
                email: email,
                company: company,
                phones: [
                    {
                        mobile_phone: mobile_phone,
                        home_phone: home_phone,
                        work_phone: work_phone
                    }
                ],
                address: [
                    {
                        street_address: street_address,
                        city: city,
                        state: state,
                        zip_code: zip_code
                    }
                ]
            }).then(function (ref) {
                var id = ref.key();
                console.log("Added contact with ID :", id);

                // Clear the form
                clearFields();

                // Hide the form
                $scope.addFormShow = false;

                // Send message
                $scope.msg = "Contact added with success";
            });

            // Clear $scope fields
            function clearFields() {
                $scope.name = "";
                $scope.email = "";
                $scope.company = "";
                $scope.mobile_phone = "";
                $scope.home_phone = "";
                $scope.work_phone = "";
                $scope.street_address = "";
                $scope.city = "";
                $scope.state = "";
                $scope.zip_code = "";
            }

        };

    });