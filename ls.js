const fs = require("fs");
module.exports = (done) => {
  fs.readdir("./", "utf8", (err, files) => {
    if (err) {
      done('Something went wrong!');
    } else {
      done(files.join(" "));
    }
  });
};
