function register(cb) {
    setTimeout(() => {
        console.log("Register end");
        cb();
    }, 3000)

    // wiatforthreesecond();
}

function sendemail(cb) {
    setTimeout(() => {
        console.log("Email Sent");
        cb();
    }, 3000)

    // wiatforthreesecond();
}
function login(cb) {
    setTimeout(() => {
        console.log("Login success");
        cb();
    }, 3000)

    // wiatforthreesecond()
}
function getdata(cb) {
    setTimeout(() => {
        console.log("Got User Data");
        cb();
    }, 3000)


}
function displaydata() {
    setTimeout(() => {
        console.log("Data displayed");
    }, 3000)

}

// function wiatforthreesecond(){
//     const ms = 3000+new Date().getTime();
//     while(ms>new Date()){

//     }
// }
register(function () {
    sendemail(function () {
        login(function () {
            getdata(function () {
                displaydata();
            });

        });

    });

});