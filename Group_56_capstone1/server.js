const http = require('http');
const fs = require('fs')
const host  = '127.0.0.1';
const port  = 5000;
const os  = require('os');
const osinfo  = JSON.stringify(
    {
        "host_name" : os.hostname,
        "platform" : os.platform,
        "artchitecture" : os.artchitecture,
        "numberofCPUS": os.numberofCPUS,
        "netwokrkInterfaces": os.networkInterfaces,
        "uptime": os.uptime,

    }
);
const server  = http.createServer((req,res) =>{
    const urlPath  = req.url;

    
    if (urlPath == '/'){
        res.statusCode = 200;
        res.setHeader('Content-Type','text/html');
        
        res.writeHead(200, { location : "/pages/index.html" });
        return res.end();
     
    }else if (urlPath == '/about'){
        res.statusCode = 200;
        res.setHeader('Content-Type','text/html');
        res.writeHead(200, { location : "/pages/about.html"});
        return res.end();

    }else if(urlPath == '/sys'){
        res.statusCode = 201;
        res.setHeader('Content-Type','application/json');
        res.write(osinfo);
        return res.end("Your OS info has been saved successfully!");

    }else {
        res.statusCode = 404;
        res.setHeader('Content-Type','text/html');
        res.writeHead(404, {location: '/pages/404.html'});
        return res.end('Page not Found !!');
    }
});



server.listen(port,host,() => {
    console.log(`Running at  ${host}:${port}`);
});