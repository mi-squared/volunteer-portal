var fs = require('fs');


var scrapeOptions = function(dir, outputFile) {

  fs.readdir(dir, function(err, list) {
    if (err) {
      return console.log(err);
    }

    list.forEach(function(file) {
      var path = dir + '/' + file;
      fs.stat(path, function (err, stat) {
        if (stat.isDirectory()) {
          scrapeOptions(path)
        } else {
          fs.readFile(path, 'utf-8', function(err, data) {
            if (err) {
              return console.log(err);
            }
            // console.log(file, '===========================================');
            lines = data.split('\n');
            lines.forEach(function(line) {
              // arr = line.match(/<option.*value=\"(.+)\".*>(.+)<\/option>/); //capture groups with values
              arr = line.match(/<option>(.+)<\/option>/); //capture groups without values
              if (arr) {
                // console.log(arr[1], ' ', arr[2])
                if (!arr[2]) {
                  arr[2] = arr[1];
                }
                fs.appendFile(outputFile + ".txt",
                              "Option::create\( [\n\t'name' => \'" +
                              arr[2].replace(/\'/, "\\'") + "\',\n\t'value' => \'" +
                              arr[1].replace(/\'/, "\\'") + "\',\n\t'form_list_id' => '" +
                              file + "'\n] \);\n",
                              {'flags': 'a'});
              }
            })
          })
        }
      })
    })
  })
}

scrapeOptions(process.argv[2], process.argv[3]);
