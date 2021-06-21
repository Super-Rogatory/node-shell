const pwd = require("./pwd");
const ls = require("./ls");
const cat = require("./cat");
const curl = require("./request");
// Output a promt
process.stdout.write("prompt > ");

// The stdin 'data' event fires after a user types in a line
process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();
  if (cmd === "pwd") {
    pwd();
  }
  if (cmd === "ls") {
    ls();
  }
  if (cmd.slice(0, 3) === "cat") {
    const fileNameArray = cmd.slice(4).split(" ");
    fileNameArray.forEach((fileName) => cat(fileName));
  }

  if (cmd.slice(0, 4) === "curl") {
    curl(cmd.slice(5));
  }
});
