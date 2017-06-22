let db = require("./back-end/db");
db.connect();

let Users = require("./back-end/user");

function run(){
    for(let user of Users){
        console.log(user);
        user.getAge();
    }
}

if(module.parent){
    exports.run = run;
} else{
    run();
}