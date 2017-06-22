let log = require("./logger")(module);
let db = require("./db");

function User(name, age, sex, skin, weight, growth){
    this.name = name
    this.age = age;
    this.sex = sex;
    this.skin = skin;
    this.weight = weight;
    this.growth = growth;
    return this;
};

User.prototype.getAge = function(){
    log("This is "+this.name+" have got "+this.age+" years old!");
}

let user1 = new User(db.getNames("Lex"), 55, "male", "white", 78, 184);
let user2 = new User(db.getNames("David"), 28, "male", "white", 107, 194);
let user3 = new User(db.getNames("Mark"), 45, "male", "white", 87, 190);
let user4 = new User(db.getNames("Patrick"), 42, "male", "red", 69, 164);
let user5 = new User(db.getNames("Jessika"), 25, "female", "black", 45, 160);
let user6 = new User(db.getNames("Lexy"), 19, "female", "yellow", 68, 176);
let user7 = new User(db.getNames("Maria"), 21, "female", "white", 57, 170);

let Users = [user1, user2, user3, user4, user5, user6, user7];

module.exports = Users;