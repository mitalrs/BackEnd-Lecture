const http = require("http");
const url = require("url");


//urlpars
http
.createServer((req, res)=>{
    console.log(req.url);

    const urlab =url.parse(req.url,true);
    console.log(urlab);


    console.log(urlab.query.q)
})
.listen(8082);