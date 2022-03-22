import http from 'http';

const port = process.env.PORT || 5000;
// Posts can come from database
const posts = [
  { id: 1, title: 'First Post' },
  { id: 2, title: 'Second Post' }
];

const requestListener = (req, res) => {
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.writeHead(200);
    res.end('Welcome to our first API');
  }
  if (req.url === '/posts') {
    if (req.method === 'GET') {
      res.setHeader('Content-Type', 'application/json');
      res.writeHead(200);
      res.end(JSON.stringify(posts));
    } else if (req.method === 'POST') {
      res.setHeader('Content-Type', 'application/json');
      res.writeHead(200);
      res.end(JSON.stringify({ success: 'New post created' }));
    }
  }
};

const server = http.createServer(requestListener);
server.listen(port, () => console.log(`Server listening on port ${port}`));
