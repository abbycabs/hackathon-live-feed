var app = require('./app'),
    debug = require('debug')('hackathon-live-feed:server'),
    http = require('http'),
    Twitter = require('twitter'),
    config = require('./_config'),
    request = require("request"),
    _ = require('lodash'),
    etag_index = {};


// get port from env and store
var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

// create http server
var server = http.createServer(app);

// listen
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

// normalize port
function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}

// event handler for errors
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string' ? 'Pipe ' + port: 'Port ' + port;

  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

// listening
function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string' ? 'pipe ' + addr: 'port ' + addr.port;
  debug('Listening on ' + bind);
  console.log('Express server listening on port ' + port);
}

// sockets

var io = require('socket.io').listen(server);

// var client = new Twitter({
//   consumer_key: config.twitterConsumerKey,
//   consumer_secret: config.twitterConsumerSecret,
//   access_token_key: config.twitterAccessTokenKey,
//   access_token_secret: config.twitterAccessTokenSecret
// });

// client.stream('statuses/filter', {track: config.hashtags}, function(stream) {
//   stream.on('data', function(tweet) {
//     io.emit('newTweet', tweet);
//   });
//   stream.on('error', function(error) {
//     throw error;
//   });
// });


var commitLibrary = [];

var creds = [{
      username: config.githubUsername,
      password: config.githubPassword
    },{
      username: config.githubUsernameA,
      password: config.githubPasswordA
    },{
      username: config.githubUsernameB,
      password: config.githubPasswordB
    },{
      username: "abbycabs",
      password: config.githubPasswordB
    }];

// refactor!
function getCommits(owner, repo) {
    var etag = etag_index[owner + repo];
    var url = 'https://api.github.com/repos/'+owner+'/'+repo+'/events';

    var options = {
      method: "GET",
      json: true,
      url: url
    };
    // var userCreds = (Math.random() > 0.5) ? creds1 : creds2;

    var userCreds = creds[Math.floor(Math.random() * (creds.length))];

  request(_.extend({
    headers: {
      Accept: "application/vnd.github.v3+json",
      "User-Agent": "testing MozFest proposal migrators",
      "If-None-Match": etag
    },
    auth: {
      user: userCreds.username,
      pass: userCreds.password
    },
    json: true
  }, options), function(error, response, body) {
    if (error) {
      console.log(error);
    } else {
      etag_index[owner + repo] = response.headers.etag;
      // console.log(response.headers);
      console.log('----');
      console.log(response.headers['x-ratelimit-remaining']);
      console.log(response.headers['x-ratelimit-reset']);
      console.log(response.headers.status);
      console.log(response.headers.etag);
      console.log(userCreds.username);

      if (response.statusCode >= 200 && response.statusCode < 300){
        commitLibrary = commitLibrary.concat(body);
        console.log(owner + '/' + repo + ' ' + response.statusCode);
      }
    }
  });
}

var sortLibrary = function(){
  commitLibrary.sort(function(a, b){
      var keyA = new Date(a.created_at),
          keyB = new Date(b.created_at);
      // Compare the 2 dates
      if(keyA > keyB) return -1;
      if(keyA < keyB) return 1;
      return 0;
  });
  commitLibrary = commitLibrary.filter(function(item, pos) {
      if(pos == 0) return true;
      return item.created_at != commitLibrary[pos-1].created_at
  });
}

var gitData = config.github;
gitData.forEach(function(data) {
  etag_index[data.owner + data.repo] = "";
});
var loop = function() {
  gitData.forEach(function(data) {
    getCommits(data.owner, data.repo);
  });
  setTimeout(function(){
    console.log('emitted!');
    sortLibrary();
    commitLibrary = commitLibrary.slice(0,50)
    io.emit('newCommit', commitLibrary);
  }, 100)
};
loop();
setInterval(loop, 8000);



io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});
