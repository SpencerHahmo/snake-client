const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log("Connection Established");
    conn.write("Name: SCH");
    
    /*setInterval(() => {
      conn.write("Move: up");
    }, 50)
    
    let delay = 50;
    setTimeout(() => {
      conn.write("Move: up");
    }, delay += 50)
    Note
    "Move: up" - move up one square (unless facing down)
    "Move: down" - move down one square (unless facing up)
    "Move: left" - move left one square (unless facing right)
    "Move: right" - move left one square (unless facing left)
    */
    

  })

  conn.on('data', (data) => {
    console.log(data);
  });
  
  return conn;
};

module.exports = { connect };//export the connect function