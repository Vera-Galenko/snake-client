let connection;

const handleUserInput = function(data){
    if (data === '\u0003') {
        console.log('Game over');
        process.exit();
      }   
    if (key === 'w'){
        connection.write("Move: up");
        console.log("Successfully sent the command up" );
    }
    if (key === 'a'){
        connection.write("Move: left");
        console.log("Successfully sent the command left" );
    }
    if (key === 's'){
        connection.write("Move: down");
        console.log("Successfully sent the command down" );
    }
    if (key === 'd'){
        connection.write("Move: right");
        console.log("Successfully sent the command right" );
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