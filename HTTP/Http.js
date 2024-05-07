const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  
  res.setHeader('Content-Type', 'text/html');
  
  const responseBody = `
    <html>
      <head>
        <title>Custom Message</title>
      </head>
      <body>
        <h1>Hello Giovanni!</h1>
        <p>Ti mando questo messaggio per ringraziarti.</p>
      </body>
    </html>
  `;
  
  res.end(responseBody);
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
