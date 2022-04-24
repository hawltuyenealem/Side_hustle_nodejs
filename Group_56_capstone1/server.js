const http = require('http');

const host  = '127.0.0.1';
const port  = 5000;

const server  = http.createServer((req,res) =>{
    const urlPath  = req.url;


    if (urlPath == '/'){
        res.statusCode = 200;
        res.setHeader('Content-Type','text/html');
     
    }else if (urlPath == '/about'){
        res.statusCode = 200;
        res.setHeader('Content-Type','text/plain');

    }else if(urlPath == '/sys'){
        res.statusCode = 200;
        res.setHeader('Content-Type','text/plain');

    }else {
        res.statusCode = 404;
        res.setHeader('Content-Type','text/html');
      
    }
});