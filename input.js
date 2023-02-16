const { COMMAND_LIST } = require("./constants");

// Stores the active TCP connection object.
let connection;

const handleUserInput = function(key) {
  // If the user enters control c, play.js stops
  if (key === '\u0003') {
    process.exit();
  }
  
  // If the user presses a key associated with anything on the COMMAND_LIST object
  if (COMMAND_LIST[key]) {
    // *(leaving everything as in)*, pressing w will write "Move: up"
    connection.write(COMMAND_LIST[key]);
  }
};

// setup interface to handle user input from stdin

const setupInput = (conn) => {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");

  stdin.on("data", handleUserInput);

  stdin.resume();
  return stdin;
};

module.exports = { setupInput };//export the setupInput function