const handleUserInput = function(data){
    if (data === '\u0003') {
        console.log('Game over');
        process.exit();
      }   
    if (key === )
}

const setupInput = function() {
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding('utf8');
    stdin.resume();
    return stdin;
  }


  module.exports = {setupInput};