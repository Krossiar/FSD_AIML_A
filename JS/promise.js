const mypromise =new Promise(
    (resolve,reject)=>{
        console.log("executed promise")
        resolve("success");
    }
);
mypromise.then((msg)=>{
    console.log(msg);
}).catch((err)=>{
    console.log(err);
}).finally(()=>{
    console.log("Throughout the earth I am the alone honoured one")
})