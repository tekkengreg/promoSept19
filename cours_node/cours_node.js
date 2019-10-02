const chalk = require("chalk");

console.log(chalk.red("wilder de malade"));
console.log(chalk.yellow("toto"));
console.log(chalk.blue("riri"));
console.log(chalk.blue("Hello world!"));

const http = require("http");
const port = 5000;
const server = http.createServer((request, response) => {
  response.writeHead(200);
  response.end("Hello World");
});

server.listen(port);
console.log(`Adresse du serveur:http://localhost:${port}`);
