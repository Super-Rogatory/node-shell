const fs = require("fs");
module.exports = function (fileName) {
  // how we gonna get filename
  fs.readFile(`${fileName}`, "utf8", (err, fileContents) => {
    if (err) {
      throw err;
    } else {
      process.stdout.write(fileContents);
      process.stdout.write("\nprompt > ");
    }
  });
};
