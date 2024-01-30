

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

function loginUserMessage(username="tan")
{
    if (!username) {
        console.log("please enter a username");
        return
        
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("taniya"));
console.log(loginUserMessage());