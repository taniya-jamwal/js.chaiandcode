const name="taniya"
const repo=50

// console.log(name+repo);
console.log(`hello my name is ${name} and my repo count is ${repo}`); //string interpolation

const gameName= new String('taniya-jam')
// console.log(gameNAme.__proto__);

// console.log(gameNAme.length);
// console.log(gameNAme.toUpperCase());
// console.log(gameNAme.charAt(2));
// console.log(gameNAme.indexOf('t'));

const newString= gameName.substring(0,4)
console.log(newString);

const anotherString= gameName.slice(-8,4)
console.log(anotherString);

const newStringOne="         tamiya  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url="https://tsmiya.com/ jam"
console.log(url.replace('%20','-'))

console.log(url.includes('sundar'))

console.log(gameName);
console.log(gameName.split('-'));


