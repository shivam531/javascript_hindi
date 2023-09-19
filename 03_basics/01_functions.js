// function name() {
// decleation of function
// }

// execution of the fuction 
//   name()

// console.log("hello")

function name(){
    console.log("hello");
}

// name()

// function addTwoNumbers(number1, number2) {
//    console.log(number1 + number2)
// }
const result = addTwoNumbers(5, 7)

// console.log(result);

function addTwoNumbers(number1, number2) {
    //  let result = number1 +number2;
    //  return result

    return number1 + number2
 }
 
function loginUserMessage (username){
    if(!username ){
        console.log(("Please enter a username")) 
    }
   return   `${username} just logged in `
  }

    console.log(loginUserMessage("shivam"))