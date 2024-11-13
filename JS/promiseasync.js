function register() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            //return reject("Network Error during Registration")
            console.log("Register End");
            resolve()
        },3000)
    })
    
        // setTimeout(() => {
        //     console.log("Register end");
        //     cb();
        // }, 3000)
    
        // wiatforthreesecond();
    }
    
    function sendemail() {
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                console.log("Email Sent");
                resolve();
            })
        })
        // setTimeout(() => {
        //     console.log("Email Sent");
        //     cb();
        // }, 3000)
    
        // wiatforthreesecond();
    }
    function login() {
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                return reject("Login error")
                console.log("Login success");
                resolve();
            }, 3000)
            
        })
        
    
        // wiatforthreesecond()
    }
    function getdata() {
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                console.log("Got User Data");
                
            }, 3000)
        })
       
    
    
    }
    function displaydata() {
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                console.log("Data displayed");
            }, 3000)
        })
       
    
    }
    register().then(sendemail)
    .then(login)
    .then(getdata)
    .then()
    
    // function wiatforthreesecond(){
    //     const ms = 3000+new Date().getTime();
    //     while(ms>new Date()){
    
    //     }
    // }
    // register(function () {
    //     sendemail(function () {
    //         login(function () {
    //             getdata(function () {
    //                 displaydata();
    //             });
    
    //         });
    
    //     });
    
    // });
    
   // 4strdycvhj
//
   // trcghn ImageBitmapytghj nm
    //Promise
    async function authenticate(){
        register();
        sendemail();
        login();
        getdata();

    }
    try{
        await register();
        await sendemail();
        await login();
        await getdata();
        await displaydata();
    }
    catch(err){
        console.log("Error :",err)
    }
