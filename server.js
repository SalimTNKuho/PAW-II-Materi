var http = require('http');

var server = http.createServer(function(req, res) {
    res.end("Hallo, Selamat datang di Node.js!");
});

server.listen(3000);

console.log("Server running at http://localhost:3000/");