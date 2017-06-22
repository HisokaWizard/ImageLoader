let names;

exports.connect = function(){
    names = require("./ru");
}

exports.getNames = function(name){
    for(let _name in names){
        if(name === _name){
            return names[_name];
        }
    }
    throw new Error("Have not got this name: " + name);
}