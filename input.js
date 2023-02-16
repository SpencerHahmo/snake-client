const { connect } = require("./client");

// Stores the active TCP connection object.
let connection;

const handleUserInput = function (key) {
  // If the user enters control c, play.js stops
  if (key === '\u0003') {
    process.exit();
  }

  // If the user presses w
  if (key === 'w') {
    connection.write('Move: up');
    //console.log("Move: up")
  }
  
  // If the user presses a
  if (key === 'a') {
    //console.log("Move: left")
    connection.write('Move: left');
  }
  
  // If the user presses s
  if (key === 's') {
    //console.log("Move: down")
    connection.write('Move: down');
  }
  
  // If the user presses d
  if (key === 'd') {
    //console.log("Move: right")
    connection.write('Move: right');
  }


  if (key === '1') {
    connection.write("Say: Hello o/");
  }
  
  if (key === '2') {
    connection.write("Say: LEEROY JENKINS");
  }

  if (key === '3') {
    connection.write("Say: MAXIMUM OVERDRIVE!");
  }
}

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