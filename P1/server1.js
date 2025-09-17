var http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Hello <b>World</b>!</br></h1>');
    res.write('<h2><b><u>Selamat Datang di Node JS menggunakan server alamat 3000</u></b></h2>');
    res.end();
}).listen(3000);

console.log("Server running at http://localhost:3000/");

// GET = ?
// POST = ?