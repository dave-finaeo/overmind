#! /usr/bin/env node
const { exec } = require("child_process");
exec("./node_modules/.bin/electron ./backend", (error, stdout, stderr) => {
  if (error) {
    console.error(error.message);
  }
  console.log(`stdout: ${stdout}`);

  console.log(`stderr: ${stderr}`);
});