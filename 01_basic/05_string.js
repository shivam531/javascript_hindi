const name= "shivam"
const repoCount = 3 

// console.log(name + repoCount + "value");  outted style

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('shivam-patel-com')

 console.log(gameName[0])
 console.log(gameName.__proto__);

console.log(gameName.toUpperCase());
console.log(gameName.charAt(2))
console.log(gameName.indexOf('v'))

const newString= gameName.substring(0,4);
console.log(newString);

const anotherSrtring = gameName.slice(0,4);
console.log(newString);

const newStringOne = "   shivam   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://shivam.com/hitesh%20patel"
console.log(url.replace('%20' , '-'))
console.log(url.includes('shivam'))

console.log(gameName.split('-'));
