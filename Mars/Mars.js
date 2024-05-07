const http = require('http');

const server = http.createServer((req, res) => {
  // Set the response status code to 200
  res.statusCode = 200;
  
  // Set the Content-Type header to application/json
  res.setHeader('Content-Type', 'application/json');
  
  // JSON response body with location set to "Mars"
  const responseBody = JSON.stringify({ location: "Mars" });
  
  // Send the JSON response body
  res.end(responseBody);
});

// Make the server listen to port 3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
