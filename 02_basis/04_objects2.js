// Object de-Structuring

const course={
    coursename: "js in hindi",
    price: 999,
    courseInstructor: "hitesh"
}
// course.courseInstructor

const {courseInstructor:instructor}=course
console.log(instructor);

// const navbar = ({company}) =>  // {} ya ha destructuring
// {

// }
// navbar(company="cisco")

//+++++++++++++++ APIS ++++++ //kese aur ko kaam dena 
//backend se value atti ha usko kase likhte ha
//backend se value atti ha Json se // object ko Json //object ka koi namw ni hotta
// {
//     "name":"taniya",
//     "coursename":"js in hindi",   // object k format ma json
//     "price":"free"
// }


// array json
[
    {},
    {},
    {}
]