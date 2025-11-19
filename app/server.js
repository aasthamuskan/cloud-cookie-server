const http = require('http');
const fs = require('fs');

const PORT = process.env.PORT || 8080;

function getRandomQuote() {
  const data = fs.readFileSync('./app/quotes.json');
  const quotes = JSON.parse(data);
  return quotes[Math.floor(Math.random() * quotes.length)];
}

const server = http.createServer((req, res) => {
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.end("🍪 Cloud Cookie: " + getRandomQuote() + "\n");
});

server.listen(PORT, () => {
  console.log(`Cloud Cookie Server running on port ${PORT}`);
});
