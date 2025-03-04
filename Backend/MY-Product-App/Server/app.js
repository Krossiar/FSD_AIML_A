const express=require("express")
const fs=require("fs/promises")
const app=express()
const port=3002
const users=[]
const m1=(req,res,next)=>{
    const age=req.query.age
    if(!age){
        res.status(400).send("Enter age in query")
    }
    else{
        if(age<18){
            res.status(401).send("Users not authorized")
        }
        else{
            next();
        }
    }
}
//app.use(m1)
app.use(express.json())
app.get("/users",async(req,res)=>{
    try{
        const data=await fs.readFile("./users.json","utf-8")
        res.status(200).json(data)
    }
    catch(err){
        res.status(400).send("File not found")
    }
})
app.get("/user/:id",(req,res)=>{
    const uid=req.params.id;
    const index=users.findIndex(ind=>ind.id==uid);
    if(index==-1){
        res.status(400).json({status:"fail",message:"User not found"})
    }
    else{
        res.status(200).json({status:"Success",message:"Userfound",data:users[index]})
    }
})
app.post("/createusers",m1,async(req,res)=>{
    const {name,email}=req.body;
    const newId=Date.now();
    const newUser={
        id: newId,name,email
    }
    const data=await fs.readFile("./users.json","utf-8")
    users.push(data)
    users.push(newUser)
    await fs.writeFile("./users.json",JOSN.stringify(users))
    res.status(201).json({status:"Success",message:"User created successfully",data:newUser})
})
app.patch("/edituser/:id",(req,res)=>{
    const uid=req.params.id;
    const {name,email}=req.body;
    if(!name || !email){
        res.status(400).json({status:"Fail",message:"All Fields Required"})
    }
    else{
        const index=users.findIndex(ind=>ind.id==uid);
        if(index==-1){
            res.status(400).json({status:"fail",message:"User not found"})
        }
        else{
            users[index].name=name;
            users[index].email=email;
            res.status(200).json({status:"success",message: "User Edited Successfully",data:users[index]})
        }

    }
})
app.delete("/deleteuser/:id",(req,ress)=>{
    const uid=req.params.id;
    const index=users.findIndex(ind=>ind.id==uid)
    if(index==-1){
        res.status(400).json({status:"fail",message:"User not found"})
    }
    else{
        const deletedata=users.splice(index,1)
        res.status(200).json({status:"success",message: "User Edited Successfully",data:deletedata})
    }
})
app.listen(port,()=>{
    console.log(`Server is Running on port ${port}`)
})