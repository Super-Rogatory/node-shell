const chalk = require("chalk");
const request = require("request");

module.exports = function (URL) {
  request(URL, function (error, response, body) {
    console.error("error:", error); // Print the error if one occurred
    console.log("statusCode:", chalk.green(response && response.statusCode)); // Print the response status code if a response was received
    console.log("body:", chalk.cyan(body)); // Print the HTML for the Google homepage.
  });

  process.stdout.write("\nprompt > ");
};
