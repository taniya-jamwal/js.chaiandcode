// Events and Objects are the main to learn the javascript

//object  deceleration - literals or constructor

// Singleton - it is made by the constructor 
// while declaring with the literals wwe can't make singleton

// Object Literals

//Object.create - singleton

const mySym= Symbol("key1")


const JsUser ={

    name:"taniya ",
    "full name":"taniya jamwal",
    [mySym]:"mykey1",
    age:18,
    location:"jammu",
    email:"taniya@google.com",
    isLoggedIn :false,
    lastLoginDays:["monday","saturday"]

}
// console.log(JsUser);
// console.log(JsUser.email) //string ki tarah access lene ki koi zarurat nahi ha
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

// object ki value ko access dot(.) notation se krte ha



JsUser.email="vansh@chat.com" // value ko change kase krte ha (=) equals se

// Object.freeze(JsUser) //value ko change nah kr sake toh freeze use krte ha
JsUser.email="taniya@chat.com"
// console.log(JsUser);

// functions through the variables

JsUser.greeting= function()
{
    console.log("hello js user");
}
JsUser.greeting2= function()
{
    console.log(`hello js user ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());

