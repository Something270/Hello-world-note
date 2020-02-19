//libreria hhtp de node.js
const http = require('http');
//host:loopback address
const hostname = '127.0.0.1'
//node.js default port
const port = 3000;

//function
const f = function() {

}

//ECMAscript 6 function
const f2 = () => {

}

() => {}
//res -> result
const server = http.createServer((req,res) =>{
    //0k
    res.statusCode = 200;
    //set-content mimetype for plain text
    res.setHeader('Content-type', 'text/plain');

    res.end('hello world');
});

server.listen(port,hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});