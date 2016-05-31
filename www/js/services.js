'use strict'
angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});

// 'use strict';

// var forecastioWeather = ['$q', '$resource', '$http', 'FORECASTIO_KEY', 
//   function($q, $resource, $http, FORECASTIO_KEY) {
//   var url = 'https://api.forecast.io/forecast/' + FORECASTIO_KEY + '/';

//   var weatherResource = $resource(url, {
//     callback: 'JSON_CALLBACK',
//   }, {
//     get: {
//       method: 'JSONP'
//     }
//   });

//   return {
//     //getAtLocation: function(lat, lng) {
//     getCurrentWeather: function(lat, lng) {
//       return $http.jsonp(url + lat + ',' + lng + '?callback=JSON_CALLBACK');
//     }
//   }
// }];

// angular.module('starter.services', ['ngResource'])
// .factory('Cities', function() {
// var cities = [
//     { id: 0, name: 'Miami', lat:25.7877 , lgn: 80.2241 },
//     { id: 1, name: 'New York City' ,lat: 40.7127 , lgn: 74.0059 },
//     { id: 2, name: 'London' ,lat:51.5072 , lgn: 1.1275 },
//     { id: 3, name: 'Los Angeles' ,lat: 34.0500 , lgn: 118.2500 },
//     { id: 4, name: 'Dallas' ,lat: 32.7758 , lgn:96.7967  },
//     { id: 5, name: 'Frankfurt' ,lat:50.1117 , lgn: 8.6858 },
//     { id: 6, name: 'New Delhi' ,lat:28.6100 , lgn: 77.2300 }
//   ];

//   return {
//     all: function() {
//       return cities;
//     },
//     get: function(cityId) {
//       // Simple index lookup
//       return cities[cityId];
//     }
//   }
// }).
// factory('DataStore', function() {
//     //create datastore with default values
//     var DataStore = {
//         city:       'Miami',
//         latitude:   25.7877,
//         longitude:  80.2241 };

//     DataStore.setCity = function (value) {
//        DataStore.city = value;
//     };

//     DataStore.setLatitude = function (value) {
//        DataStore.longitude = value;
//     };

//     DataStore.setLongitude = function (value) {
//        DataStore.longitude = value;
//     };

//     return DataStore;
// })
// .factory('Weather', forecastioWeather);


