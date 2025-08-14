const http = require('http');
const port = process.env.PORT || 8080;
const build = process.env.BUILD || 'local';

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(`<h1>Hello from hello-node-docker</h1><p>Build: ${build}</p>`);
});

server.listen(port, () => console.log(`Listening on ${port}`));

