const pwd = require("./pwd");
const ls = require("./ls");
const cat = require("./cat");
const curl = require("./request");

const done = (output) => {
  if (output.length === 1) process.stdout.write(output);
  else {
    // "spreads" all elements of the string, into an array so we can call forEach
    const fileContents = [...output];
    fileContents.forEach((content) => process.stdout.write(content));
  }
  process.stdout.write("\nprompt > "); // Cat implementation
};

// Output a prompt
process.stdout.write("prompt > ");

// The stdin 'data' event fires after a user types in a line
process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();
  if (cmd === "pwd") {
    pwd(done); // test
  }
  if (cmd === "ls") {
    ls(done);
  }
  if (cmd.slice(0, 3) === "cat") {
    const fileNameArray = cmd.slice(4).split(" ");
    cat(fileNameArray, done);
  }
  if (cmd.slice(0, 4) === "curl") {
    curl(cmd.slice(5));
  }
});
