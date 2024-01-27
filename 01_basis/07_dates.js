let myDate= new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023,1,23,5,4)
let myCreatedDate = new Date("2023-01-14")
// console.log(myCreatedDate.toLocaleString());
let myTImeStamp= Date.now()

// console.log(myTImeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDAte= new Date()
console.log(newDAte)
console.log(newDAte.getMonth()+1);
console.log(newDAte.getDay());

// `${newDAte.getDay()} and the time`
newDAte.toLocaleString('default',{
    weekday:"long",
})