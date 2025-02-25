const express=require("express");
const port=3001;
const app=express()
const products=[
    {
        id: 1001,
        title:"Laptop",
        price: 51000,
        quantity: 5
    },
    {
        id: 1002,
        title:"Laptop1",
        price: 51001,
        quantity: 6
    }
];
app.use(express.json())
app.get("/products",(req,res)=>{
    res.status(200);
    res.json(products);
})
app.get("/product/:id",(req,res)=>{
    const pid=req.params.id;
    const index=products.findIndex(ind=>ind.id==pid)
    if(index==-1){
        res.status(400).json({
            status: "Fail",
            message: "Product id found",
        })
    }
    else{
        res.status(200).json({
            status: "Success",
            message: "Product id found",
            products
        })
    }

})
app.post("/product",(req,res)=>{
    const {title,price,quantity}=req.body;
    if(!title ||!price ||!quantity){
        res.status(400).json({
            status: "Fail",
            message: "All Fields Reuired",
        })
    }
    else{
    const newId=products.length>0?products[products.length-1].id+1:1001;
    const newProduct={
        id:newId,title,price,quantity
    }
    products.push(newProduct)
    res.status(201).json({
        status: "success",
        message: "Product Created Successfully",
    })}
})
app.listen(port,(err)=>{
    try{
        if(err) throw err
        else
        console.log(`Server is running on port ${port}`);
    }
    catch(err){
        console.log("Server Error: ",err.message);
    }
})