const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '10.0.2.15',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  // conn.on('connect', () => {
  //   conn.write(data);
  // })
  conn.on('data', (data) => { //get message back from server
    console.log('MESSAGE FROM THE SERVER', data)
  })

  return conn;
}

console.log('Connecting ...');
connect();