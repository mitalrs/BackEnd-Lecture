const url = require('url');
const http = require('http');
const fs = require('fs');



http.createServer((req,res)=>{

    const path = req.url
    if(path=='/about'){
        console.log("about page")
    }
    else if(path=="/"){
        console.log("Home")

        res.writeHead(200,{
            'content-type':'text/html',
        });
        const fileContent = fs.readFileSync("./views/Home.html");
        res.write(fileContent);

        res.end();
    }
    else if(path=="/services"){
        console.log("services")
    }

}).listen(8083)