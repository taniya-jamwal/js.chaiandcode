//array 
const myarr=[0,1,2,3]
const myHeros=["ali","taniya"]

const myArray2=new Array(1,2,3)
// console.log(myarr[0]);

// Array methods

// myarr.push(6)
// myarr.push(9)
// myarr.pop();

// myarr.unshift(4);
// myarr.shift();

// console.log(myarr.includes(9));
// console.log(myarr.indexOf(2));

const newArr= myarr.join()
// console.log(myarr);
// console.log(newArr);

// console.log(myarr );


//slice, splice

console.log("A",myarr);
const tan=myarr.slice(1,3)

console.log(tan);
console.log("B",tan);

const tan2= myarr.splice(1,3)
console.log("B",myarr);
console.log(tan2);

