let connection;
const {
    MOVE_UP_KEY,
    MOVE_RIGHT_KEY,
    MOVE_DOWN_KEY,
    MOVE_LEFT_KEY
} = require(`./constants`)

const handleUserInput = function(data){
    if (data === '\u0003') {
        console.log('Game over');
        process.exit();
      }   
    if (key === 'w'){
        connection.write(MOVE_UP_KEY);
        // console.log("Successfully sent the command up" );
    }
    if (key === 'a'){
        connection.write(MOVE_LEFT_KEY);
        // console.log("Successfully sent the command left" );
    }
    if (key === 's'){
        connection.write(MOVE_DOWN_KEY);
        // console.log("Successfully sent the command down" );
    }
    if (key === 'd'){
        connection.write(MOVE_RIGHT_KEY);
        // console.log("Successfully sent the command right" );
    }



}

const setupInput = function() {
    connection = conn;
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding('utf8');
    stdin.resume();
    return stdin;
  }


  module.exports = {setupInput};