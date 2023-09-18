// singleton = made with constructor 
// Object.create

// object literals 
const mySym =Symbol("key1")

//   Declartion of Object
const JsUser = {
    name  : "Shivam" ,
    "full name" : "shivam patel",
    [mySym] : "mykey1",
    age : 22,
    location : "amritsar",
    email : "shivam@tcs",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "saturday"]
}

// access the object

// console.log(JsUser.age);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]); //this method is uesd for this reason
// console.log(JsUser[mySym]);
// console.log(JsUser);
 

// access the element with .
// overright th element with =
// and freez the object with freez word  object.freeze(object name )


JsUser.greeting = function () {
    console.log("Hello Js User");
       
}
console.log(JsUser.greeting());

JsUser.greetingTwo = function () {
    console.log(`Hello Js User,${this.name}`);
}

console.log(JsUser.greetingTwo());