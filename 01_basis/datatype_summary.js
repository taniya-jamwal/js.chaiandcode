// primitive (call by value)

// 7 types : string,Number,Boolean,null,undefined,symbol,bigInt


const scrore=100
const scoreValue=100.3
const isLoggedIn=true
const outSideTemp=null;
let userEmail;

const id= Symbol('123')
const anotherID=Symbol('123')

console.log(id=== anotherID);

const bigNumber=43534546562784540348357456475n


// Reference (Non Primitive)

//Arrays , Objects , Functions

const heros =[" shaktiman", "naagraj" ,"doga"]

let myobj={
    name:"taniya",
    age:20,
}

const myfunction=function(){
    console.log("hello world");
}

console.log(typeof bigNumber); //bigInt
console.log(typeof myfunction); // function object


//++++++++++++++++++++++++++++++++++++++++++++

//stack (Primitive) , Heap (non Primitive)
