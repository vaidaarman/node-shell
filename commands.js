let fileSystem = require("fs");

module.exports = {
  pwd: function() {
    process.stdout.write(process.cwd());
    process.stdout.write("\nprompt > ");
  },
  ls: function() {
    return fileSystem.readdir(".", function(err, files) {
      if (err) throw err;
      files.forEach(function(file) {
        process.stdout.write(file.toString() + "\n");
      });
      process.stdout.write("prompt > ");
    });
  },
  echo: function(text) {
    console.log(text);
    process.stdout.write("prompt > ");
  },
  cat: function(file) {
    console.log(fileSystem.readFile(file, "utf8", function(err, data) {
        if (err) throw err;
        console.log(data);
        process.stdout.write("prompt > ");
      })
    );
  },
  date: function() {
    var date = new Date();
    process.stdout.write(date.toString());
    process.stdout.write("\nprompt > ");
  }
};
