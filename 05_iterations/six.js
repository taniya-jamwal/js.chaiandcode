// const coding=["js","ruby","java","pyhton"]

// const values= coding.forEach((item)=>{
//     // console.log(item);
//     return item
// })

// console.log(values);
const num=[1,2,3,4,5,7,8,9]
// const newnums=num.filter((num)=> {
//     return num>4
// })
const newnum=[]
num.forEach((num)=>{
    if (num>4) {
        newnum.push(num)
        
    }
})




console.log(newnums);