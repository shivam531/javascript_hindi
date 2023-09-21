// var c = 300
 let a= 300   //Global scope is the out side the block
if(true)
{
let a= 10 
const b = 20    //local scole is in side the block
 console.log("inner : " , a); 
}

console.log(a);
// console.log(b);
