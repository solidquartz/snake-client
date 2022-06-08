const net = require("net");

// establishes a connection with the game server
const connect = function() {
  console.log("Connecting...");
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: '50541',
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", (connect) => {
    console.log("Connected to the game server! 🐍 ");
  });

  conn.on("connect", () => {

    conn.write("Name: AKY");

  });


  conn.on("data", (data) => {
    console.log(data);
  });


  return conn;
};

module.exports = { connect };