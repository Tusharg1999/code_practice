const readline = require('readline');
let i;
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('What do you think of Node.js? ', (answer) => {
  // TODO: Log the answer in a database
     i=answer;
  rl.close();
});
console.log(i);