const pwd = require("./pwd");
const ls = require("./ls");
const cat = require("./cat");
const curl = require("./request");

const done = (output) => {
  process.stdout.write(output); // Step 2: Output the result of the command
  process.stdout.write("\nprompt > "); // Step 3: Show the prompt 
};

// Output a prompt
process.stdout.write("prompt > ");

// The stdin 'data' event fires after a user types in a line
process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();
  if (cmd === "pwd") {
    pwd(done);
  }
  if (cmd === "ls") {
    ls(done);
  }
  if (cmd.slice(0, 3) === "cat") {
    const fileName = cmd.slice(4);
    cat(fileName, done);
  }
  if (cmd.slice(0, 4) === "curl") {
    curl(cmd.slice(5));
  }
});
