// const user={
//     Username:"taniya",
//     price:999,
//     welcomeMessage : function(){
//         console.log(`${this.Username},welcome to website`);
//         console.log(this);

//     }
  

// }
// user.welcomeMessage()
// user.username="sam" //context change
// user.welcomeMessage()
// console.log(this);

//current context

//window object - browzer ma object

// function chai()
// {
//     let username="taniya"
//     console.log(this.Username);
// }
// chai()

// const chai=function()
// {
//     let username="taniya"
//     console.log(this.username);
// }

const chai=()=>{          //ES6 ma ese function define krtre ha

    let username="taniya"
        console.log(this);
}
chai()

//pure Arrow functions:

//syntax: ()=>{}

// const addTwo=(num1,num2) =>{
//     return num1+num2
// }

console.log(addTwo(4,3))

//implicit return : esme bracket use ni krne pdte
const addTwo=(num2,num1)=>  num1+num2
 
//or
