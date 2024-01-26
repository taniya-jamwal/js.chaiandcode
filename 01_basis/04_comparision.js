//  console.log("2">1);
//  console.log("02">1);

console.log(null>0);   //false
console.log(null==0);  //false
console.log(null>=0);  //true  
/* the reason is that an equality check == and comparision > <>=<=
 works differiently
comparisions convert null to a number,treating it as 0
 thats why(3) null>= 0 is true and (1) null > 0 is false
 */

 console.log(undefined==0);
 console.log(undefined>0);
 console.log(undefined<0);

 //  === (strict check)
 console.log("2"===2);


 