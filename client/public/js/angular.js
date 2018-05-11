var stream = angular.module('myApp', ['ui.bootstrap','angularMoment', 'ipCookie']);

stream.factory('socket', function ($rootScope) {
  var socket = io.connect();
  return {
    on: function (eventName, callback) {
      socket.on(eventName, function () {
        var args = arguments;
        $rootScope.$apply(function () {
          callback.apply(socket, args);
        });
      });
    },
    emit: function (eventName, data, callback) {
      socket.emit(eventName, data, function () {
        var args = arguments;
        $rootScope.$apply(function () {
          if (callback) {
            callback.apply(socket, args);
          }
        });
      });
    }
  };
});

stream.controller('CommitCtrl', ['$scope', 'socket', 'ipCookie', '$timeout', function($scope, socket, ipCookie, $timeout){
    $scope.status = "Loading activity...";
    $scope.commits = ipCookie('commits') || [];
    var i = 0;
    var refreshDates = function() {
      $timeout(refreshDates, 30000);
    };
    refreshDates();

    // new commit arrives from server
    socket.on('newCommit', function (commit) {
      // console.log("hi!");
      $scope.status = "";
      $scope.commits = commit;
      ipCookie('commits',commit)
      // console.log('commits',$scope.commits)
    });

  }
]);

stream.filter('fromNow', function () {
    return function (input) {
      return moment(input).fromNow();
    };
  });
