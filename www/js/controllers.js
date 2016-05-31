angular.module('starter.controllers', [])

  .controller('WeatherCtrl', ['$http', '$scope', function ($http, $scope, $ionicLoading) {
    // var vm = this;
    // $scope.show = function() {
    //    $ionicLoading.show({
    //   content: 'Loading',
    //   animation: 'fade-in',
    //   showBackdrop: true,
    //   maxWidth: 200,
    //   showDelay: 0
    // });
    // };


    // $scope.hide = function(){
    //       $ionicLoading.hide();
    // };
    var URL = 'http://api.openweathermap.org/data/2.5/weather?';
    $scope.cityInfo = {};
    var request = {
      method: 'GET',
      url: URL,
      params: {
        q: $scope.cityInfo,
        mode: 'json',
        units: 'imperial',
        cnt: '7',
        appid: '175ecd0304c6bf3b6754461c89fef374'
      }
    };

    $scope.comeOn = function () {

      $http(request)
        .then(function (response) {
          $scope.data = response.data;
          $scope.main = $scope.data.main;
          $scope.temp = $scope.main.temp;
          $scope.maxTemp = $scope.main.temp_max;
          $scope.minTemp = $scope.main.temp_min;
          $scope.name = $scope.data.name;
        }).
        catch(function (response) {
          $scope.data = response.data;
          alert('city not available');
        });

    };
  }])
  .controller('mainController', function ($scope, $http, $timeout, $ionicPlatform) {
    $scope.date = new Date();
    $scope.lat = "0";
    $scope.lng = "0";
    $scope.accuracy = "0";
    $scope.error = "";

    $scope.showResult = function () {
      return $scope.error == "";
    }

    $scope.showPosition = function (position) {
      $scope.lat = position.coords.latitude;
      $scope.lng = position.coords.longitude;
      $scope.accuracy = position.coords.accuracy;
      $scope.$apply();

    }

    $scope.showError = function (error) {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          $scope.error = "User denied the request for Geolocation."
          break;
        case error.POSITION_UNAVAILABLE:
          $scope.error = "Location information is unavailable."
          break;
        case error.TIMEOUT:
          $scope.error = "The request to get user location timed out."
          break;
        case error.UNKNOWN_ERROR:
          $scope.error = "An unknown error occurred."
          break;
      }
      $scope.$apply();
    }

    $scope.getLocation = function () {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition($scope.showPosition, $scope.showError);
      }
      else {
        $scope.error = "Geolocation is not supported by this browser.";
      }
    }
    $scope.getLocation();


    $scope.$watch(function () {
      return $scope.lat, $scope.lng;

    }, function (newValue, oldValue) {
      var URL = 'http://api.openweathermap.org/data/2.5/weather?';
      var request = {
        method: 'GET',
        url: URL,
        params: {
          lat: $scope.lat,
          lon: $scope.lng,
          mode: 'json',
          units: 'imperial',
          cnt: '7',
          appid: '175ecd0304c6bf3b6754461c89fef374'
        }
      };
      $scope.workOn = function () {
        $http(request)
          .then(function (response) {
            $scope.data = response.data;
          }).
          catch(function (response) {
            $scope.data = response.data;
            $scope.main = $scope.data.main;
            $scope.temp = $scope.main.temp;
            $scope.maxTemp = $scope.main.temp_max;
            $scope.minTemp = $scope.main.temp_min;
            $scope.name = $scope.data.name;
          });
      };
      $scope.workOn();
    });
  });
