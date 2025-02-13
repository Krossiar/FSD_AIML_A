const fs=require("fs/promises")
async function myReadFile(){
    try{
        const res=await fs.readFile("dummy.txt","utf-8")
        console.log("File Data:",res)
    }
    catch(err){
        console.log("File Reading Error",err.message);
    }
}
const myWriteFile=async (data)=>{
    try{
        await fs.writeFile("dummy.txt",data)
        console.log("Success")
    }
    catch(err){
        console.log("File Writing Error",err.message);
    }

}
myReadFile();
data="Hello Everyone wjof"
myWriteFile(data);
myReadFile();