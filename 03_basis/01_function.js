

// function sayMyName(){
//     console.log("t");
//     console.log("a");
//     console.log("n");
//     console.log("i");
//     console.log("y");

// }
// sayMyName()
// function addTwoNumbers(num1,num2)
// {
//     console.log(num1+num2);
// }

// function addTwoNumbers(num1,num2)
// {
//     // let result=num1+num2
//     // return result
//     return num1+num2
// }
// const result=addTwoNumbers(4,5) //result ma undefined hoga

// console.log(result);

// function loginUserMessage(username="tan")
// {
//     if (!username) {
//         console.log("please enter a username");
//         return
        
//     }
//     return `${username} just logged in`
// }

// // console.log(loginUserMessage("taniya"));
// console.log(loginUserMessage());

function calculateCartPrice(val1,val2,...num1) // ... ya 3 dots ko spread operator and rest operator bola jatta ha
{
    return num1

}
// 
const user={

    username:"taniya",
    price:199
}
function handleObject(anyobject)
{
    console.log(`use name is ${anyobject.username} and price is${anyobject.price}`);
}
handleObject(user)
handleObject({
username:"sam",
price:300

})
const myNewArray=[234,434,534,200]
function returnSecondValue(getArray){
    return getArray[0]

}
console.log(returnSecondValue(myNewArray));