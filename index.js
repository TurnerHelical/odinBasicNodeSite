const path = require('path');
const express = require('express');

const app = express();
const port = 8080;

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'index.html'));
});

app.get('/about', (req,res) => {
    res.sendFile(path.join(__dirname, 'about.html'));
});

app.get('/contact', (req,res) => {
    res.sendFile(path.join(__dirname,'contactMe.html'));
});

app.use((req,res) => {
    res.status(404).sendFile(path.join(__dirname, '404.html'));
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('<h1>500 - Internal Server Error </h>');
});

app.listen(port,() => {

    console.log(`Server running at http://localhost:${port}`);
});