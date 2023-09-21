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

    // console.log(loginUserMessage("shivam"))

    function addCartPrice (...num1){ //rest operater
      return num1
    }
    // console.log(addCartPrice(200,50,40))

    const user ={
        username: "shivam",
        price : 199
    }

    function objecthandle (anyobject){
      console.log(`usename is ${anyobject.username} and price is ${anyobject.price}`);
    }

    // objecthandle(user)
    objecthandle({
         username: "shiv",
         price:299
    })

    const myArr = [100, 200, 300, 400]

    function returnSecondValue(getArry){
      return getArry[1]
    }

    console.log(returnSecondValue(myArr))
    // console.log(returnSecondValue([100, 200, 300, 400]))