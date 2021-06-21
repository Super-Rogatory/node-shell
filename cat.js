const fs = require("fs");
module.exports = (fileName, done) => {
  // how we gonna get filename
  fs.readFile(`${fileName}`, "utf8", (err, fileContents) => {
    if (err) {
      throw err;
    } else {
      done(fileContents);
    }
  });
};
