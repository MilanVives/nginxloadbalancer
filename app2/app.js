const http = require('http');
const server = http.createServer((req, res) => {
if (req.url === '/') {
res.write('Hello from Node.js app 1');
res.end();
}
});
server.listen(3000);