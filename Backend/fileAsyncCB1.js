const fs=require("fs")
function myReadFile(){
    try{
        fs.readFile("dummy.txt","utf-8",(err,data)=>{
            if(err) throw err;
            console.log("file data",data);
        });
    }
    catch(err){
        console.log("file reading error",err.message)
    }
}
myReadFile()