// #primitives 

// 7 types : String , number , b
// oolean, null, undefined, symbol, BigInt
const score = 100 
const scoreValue = 100.3

const isLoggedInc= false
const outSideTemp = null
let userEmail ;

const Id= Symbol('123')
const anotherId = Symbol('123')
console.log(Id === anotherId);

const BigInt = 1237569454411111

//  JavaScript is a dynamically typed language

// Reference(Non primitive)
//  array, Objects, Functions

const hero = ["Shree Ram ji " , "Hanuman" , "Shree Krishan JI" ] ;
let bhakat = {
    name: "shivam",
    age: 22,
}

const myFunction = function(){
console.log("hellow World");
}

console.log(typeof Id);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// +++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive)(copy of the element) ,
let myname = "shivam"

 let myname1 = myname
 myname1 = "patel"

 console.log(myname1);
 console.log(myname);
// Heap(Non-Primitive)(Refence of the elemnt)
 let userOne={
     email: "user@google.com",
     upi: "user@pytm"
 }

 let userTwo= userOne

 userTwo.email = "shivam@gmail.com"

 console.log(userOne.email);
console.log(userTwo.email);