const http = require('http'); //using http for local testing and simplicity (https requires ssl certificates)
const PORT = process.env.PORT || 3000;

// Simple payload for the /cache endpoint
const cacheData = { message: 'Cached content', version: 1 };

// Simple function to create an ETag from a string body.
// This is easier to read than a crypto hash but still reasonably unique for small examples.
function makeETag(body) {
  let h = 0;
  for (let i = 0; i < body.length; i++) {
    h = (h * 31 + body.charCodeAt(i)) >>> 0;
  }
  return '"' + h.toString(16) + '"';
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const path = url.pathname;

  if (path === '/echo') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ headers: req.headers }));
    return;
  }

  if (path === '/slow') {
    const ms = Number(url.searchParams.get('ms')) || 3000;
    setTimeout(() => {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ delayedByMs: ms }));
    }, Math.max(0, ms));
    return;
  }

  if (path === '/cache') {
    const body = JSON.stringify(cacheData);
    const etag = makeETag(body);
    const headers = {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=60',
      'ETag': etag
    };

    const ifNone = req.headers['if-none-match'];
    if (ifNone && ifNone === etag) {
      res.writeHead(304, headers);
      res.end();
      return;
    }

    res.writeHead(200, headers);
    res.end(body);
    return;
  }

  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ error: 'Not Found' }));
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});


// Simple and easy-to-follow Node.js server with three endpoints:
//  - GET /echo        -> returns request headers as JSON
//  - GET /slow?ms=3000-> delays the response by `ms` milliseconds
//  - GET /cache       -> returns cache headers (ETag, Cache-Control) and supports If-None-Match -> 304
//
// Run: node mini_node_http_server.js
// Test examples:
//   curl http://localhost:3000/echo
//   curl "http://localhost:3000/slow?ms=3000"
//   curl -I http://localhost:3000/cache
//   curl -I -H 'If-None-Match: "<etag>"' http://localhost:3000/cache
