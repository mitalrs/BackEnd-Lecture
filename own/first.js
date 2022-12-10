// console.log("nodejs this is output");


//import module
const http = require("http");
const server=http.createServer((req,res)=>{
    res.writeHead(200, {"content-type":"text/html"});
    res.write("<h1>this is header h1</h1>");
    res.write("<button>button</button>");
    res.end();
})

server.listen(9898)

