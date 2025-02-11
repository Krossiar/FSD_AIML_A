const fs=require("node:fs")
function myReadFile(){
    try{
        const data=fs.readFileSync("dummy.txt")
    /*if(err){
        throw err;
    }*/
        if(data){
            console.log("file data",data.toString())
        }
        else{
            throw err
        }
    }
    catch(err){
        console.log("File Error ",err.message)
    }
}
const data="helllo?"
function myWriteFile(data){
    try{
        
        fs.writeFileSync("dummy.txt",data);
    }
    catch(err){
        console.log("File Writing Error",err.message)
    }

}
module.exports={myReadFile:myReadFile,myWriteFile:myWriteFile,username:"Vip"}
/*myReadFile();
myWritefile();
myReadFile();*/