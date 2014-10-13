var fs = require('fs');

var path = process.argv[2];
var extension = process.argv[3];
file = fs.readdir(path, function(err, data) {
  for (var i = 0; i < data.length; i++) {
    if( data[i].indexOf('.' + extension) > -1){
      console.log(data[i]);
    }
  }

});
