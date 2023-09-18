// obectd in single ton

// const tinderUser= new Object() singleton
 
const tinderUser = {

}

tinderUser.id = "123abc"
tinderUser.name ="shivam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser  = {
     email: "abx@google.com",
     fullname: {
         userfullname: {
              Firstname: "shivam",
              lastname: "patel"
         }
     }
}

// console.log(regularUser.fullname.userfullname.Firstname);

const obj1 = { 1: "a", 2: "b",}
const obj2 = { 3: "a", 4: "b",}

// const obj3 = {obj1,obj2}

const obj3 = Object.assign({},obj1, obj2)
console.log(obj3);

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// Destructering

const course = {
    coursename : "Js in hindi",
    price : "999",
    courseInstructor: "Hitesh"

}

// course.courseInstructor

const {courseInstructor : instructor} = course

console.log( instructor);

