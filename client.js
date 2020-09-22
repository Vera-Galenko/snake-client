const net = require('net');
const { IP, PORT } = require('./constants');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });
// interpret incoming data as text
conn.setEncoding('utf8'); 
  conn.on('connect', () => {
    conn.write('Name: VG');
    console.log("Successfully connected to game server" );
  })



  conn.on('data', data => { //get message back from server
    console.log('server message', data)
  })
  
  return conn;
}

// console.log('Connecting ...');
// connect();
// // setupInput(connection);

module.exports = {connect};