var path = require('path');
var fs = require('fs');
var archive = require('../helpers/archive-helpers');

exports.headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
  'Content-Type': 'application/json'
};

exports.serveAssets = function(res, asset, callback) {
  fs.readdir(asset, function(error, files) {
    files.forEach((fileName) => {
      var file = path.join(asset, fileName);
      callback(file, 'UTF-8', function(error, contents) {
        if (error) {
          throw error;
        } else {
          res.end(contents);
        }
      });
    });
  });



  // Write some code here that helps serve up your static files!
  // (Static files are things like html (yours or archived from others...),
  // css, or anything that doesn't change often.)
};


// As you progress, keep thinking about what helper functions you can put here!
