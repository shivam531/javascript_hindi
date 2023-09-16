// array

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// https://developer.mozilla.org/en-US/docs/Glossary/Deep_copy
// https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy

 const arr = [0, 1, 2, 3]
 const myHero = ["ram ji" , "hanuman ji"]

 const myArr2 = new Array(1, 2, 3, 4)
 console.log(myArr2[0]);

//  Array methods
//  arr.push(5)
//  arr.pop()
//  console.log(arr);

// arr.unshift(0)
// arr.shift()

// console.log(arr.includes(9));
// console.log(arr.indexOf(2));

// const newArr = arr.join()
// console.log(typeof newArr);
// console.log(arr);

//slice, splice manupate the array 
console.log("a", myArr2);

const myArr = myArr2.slice(1,3)
console.log(myArr)
console.log("b", myArr2);

const myArr3 = myArr2.splice(1,3)
console.log("c", myArr)
console.log(myArr3);




