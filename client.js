const net = require("net");
const { IP, PORT, UID } = require("./constants");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  
  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log("Connection Established");

    //You can change UID in constants
    conn.write(`Name: ${UID}`);
  });
  
  conn.on('data', (data) => {
    console.log(data);
  });
  
  return conn;
};

module.exports = { connect };//export the connect function