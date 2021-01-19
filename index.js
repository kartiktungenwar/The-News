var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http) {
  $http({
    method: "GET",
    url: "http://newsapi.org/v2/top-headlines?country=in&apiKey=952da71b07954070b1fd98d174b01d11",
   }).then(function (response) {
      $scope.myData = response.data.articles;
      console.log(response)
      console.log()
  });

  $http({
    method: "GET",
    url: "http://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=952da71b07954070b1fd98d174b01d11",
   }).then(function (response) {
      $scope.myBusiness = response.data.articles;
      console.log(response)
  });

  $http({
    method: "GET",
    url: "http://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=952da71b07954070b1fd98d174b01d11",
   }).then(function (response) {
      $scope.myEntertainment = response.data.articles;
      console.log(response)
  });

  $http({
    method: "GET",
    url: "http://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=952da71b07954070b1fd98d174b01d11",
   }).then(function (response) {
      $scope.myHealth = response.data.articles;
      console.log(response)
  });

  $http({
    method: "GET",
    url: "http://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=952da71b07954070b1fd98d174b01d11",
   }).then(function (response) {
      $scope.mySports = response.data.articles;
      console.log(response)
  });

  $http({
    method: "GET",
    url: "http://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=952da71b07954070b1fd98d174b01d11",
   }).then(function (response) {
      $scope.myTechnology = response.data.articles;
      console.log(response)
  });


});
