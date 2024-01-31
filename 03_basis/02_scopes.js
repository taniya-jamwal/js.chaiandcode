// let var const


// {} //curly braces hotte ha scope 
// if(true)
// {
//     let a=10
//     const b=120
//     var c=30
// }

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

// console.log(a)
// console.log(b)
// console.log(c)

//DOM -document object model
//Nested scope

function one(){
    const username="taniya"
    function two(){

        const website="youtube"
        // console.log(username);

    }
    // console.log(website);
    two()
}
one() //child (inner function) can access the parent function

if(true)
{
    const username="taniya"
    if(username==="taniya")
    {
        const website="youtube"
        // console.log(username+website);
    }
    // console.log(website);
}
// console.log(username);

//++++++++++++++++++interesting+++++++++++

function addone(num){
    return num+1

}
addone(5)

// or

const addtwo= function(num) 
{
    return num+2
}
addtwo(5)