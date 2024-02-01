// for loop

for (let i = 0; i < 9; i++) {
    const element =i;
    if(element==5)
    {
        console.log("5 is the best");
    }

    console.log(element);
    
    
}
// console.log(i);

// for (let i = 0; i <=2; i++) {
//     console.log(`outer loop :${i}`);
//     for (let j = 0; j <=3; j++) {
//         console.log(`inner loop value:${j}`);
//         console.log(i + '*' + j +'= '+ i*j);
       
        
//     }
//    ;
    
// }

//keywords :break and continue

for (let index = 1; index <=20; index++) {
    if(index==5)
    {
        console.log(`detected 5`);
        break
    }
    console.log(`value is i is ${index}`);
    
}
for (let index = 1; index <=20; index++) {
    if(index==5)
    {
        console.log(`detected 5`);
        continue                    // ek baar skip 
    }
    console.log(`value is i is ${index}`);
    
}