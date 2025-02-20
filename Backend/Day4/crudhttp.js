const http=require("http")
const port=3003;
const data=[{
    id:1001,
    name:"VIPIN",
    email:"dj.com"
}];
const server=http.createServer((req,res)=>{

    const url=req.url;
    if(url=="/users" && req.method=="GET"){
        res.writeHead(200,{"Content-Type":"applicaction/json"})
        res.write(JSON.stringify(data))
    }
    else if(url=="/users" && req.method=="POST"){
        let body=""
        req.on("data",(chunk)=>{
            body+=chunk
        })
        req.on("end",()=>{
            const parsedData=JSON.parse(body);
            const {name,email}=parsedData;
            const newId=data.length>0?(data[data.length-1].id+1):1001
            const newUser={id: newId,name,email}
            data.push(newUser)
        })
        res.writeHead(201,{"Content-Type":"applicaction/json"})
        res.write(JSON.stringify({status:"Success",message:"User created"}));
    }
    else{
        res.writeHead(404,{"Content-Type":"applicaction/json"})
        res.write(JSON.stringify({status:"fail",message:"Page not found"}));
    }
    res.end();
})
server.listen(port,(err)=>{
    try{
        if(err){
            throw err
        }
        console.log(`Server is running on port ${port}`);
    }
    catch(err){
        console.log("Server Error",err.message);
    }
})
/* C-Create POST   /createuser
   R- READ  GET    /users
   U- UPDATE PUT
   D- DELETE DELETE
   JSON.stringify(data)--> Used for taking data from backend
   JSON.parse(data)--> Used for putting data to backend
   Note--> Server is stateless
    */