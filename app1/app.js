const http = require('http');
const server = http.createServer((req, res) => {
if (req.url === '/') {
res.write('Hello from Node.js app 1');
res.write('This service runs on port 5000 on the server');
res.end();
}
});
server.listen(3000);