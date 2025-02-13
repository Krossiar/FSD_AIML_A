const http=require('http');
const server=http.createServer((req,res)=>{
    const url =req.url;
    if(url=="/home"){
        res.write("<h1>My home page</h1>");
    }
    else if(url==="/about"){
        res.write("<h1>About page</h1>");
    }
    else{
        res.write("<h1>error page</h1>");
    }
    res.end();
})
server.listen(3001,()=>{
    console.log("server is runnning on port 3001");
})