const http = require('http');
const server = http.createServer((req, res) => {
if (req.url === '/') {
res.write('Hello from Node.js app 2 \n');
res.write('This service runs on port 5001 on the server');
res.end();
}
});
server.listen(3000);