const http = require('http');
const path = require('path');
const fs = require('fs');

const port = 8080;

const server = http.createServer((req,res) => {
    res.setHeader('Content-Type', 'text/html')

    let filepath = '';

    if (req.url === '/' && req.method === 'GET' ) {
        filepath = path.join(__dirname,'index.html');
    } else if (req.url === '/about' && req.method === 'GET') {
        filepath = path.join(__dirname, 'about.html');
    } else if (req.url === '/contact' && req.method === 'GET') {
        filepath = path.join(__dirname,'contactMe.html');
    } else {
        filepath= path.join(__dirname,'404.html');
        res.statusCode = 404;
    }

    fs.readFile(filepath, (err,data) => {
        if (err) {
            res.statusCode = 500;
            res.end('<h1>500 - Internal Server Error <h1>')
        } else {
            res.statusCode = res.statusCode || 200;
            res.end(data);
        }
    });
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
})