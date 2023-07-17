const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, 'Content-Type', 'text/plain');

  if (req.url === '/') {
    res.statusCode = 200;
    res.end('this is landing page');
  } else if (req.url === '/about') {
    res.statusCode = 200;
    res.end('this is about page');
  } else {
    res.statusCode = 400;
    res.end('page not found');
  }
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
