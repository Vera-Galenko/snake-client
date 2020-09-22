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