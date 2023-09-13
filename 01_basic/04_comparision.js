// // console.log(2 >1)  greater then
// console.log(2 >= 1)
// // console.log(2 < 1) //less then
// console.log(2 == 1)
// console.log(2 != 1)

// console.log("2" > 1);
// console.log ("02" > 1);

console.log(null > 0)
console.log(null == 0)   //these type of conversion are tricky
console.log(null>=0)

/*comparisons work differently 
  comparisons convert null to a number , treating it as 0.
  that's way (3) null >=0 is true
        aand  (1) null >0 is false  
*/ 
// === means strick cheak
console.log(undefined == 0)
console.log (undefined >0) 
console.log(undefined  <0)