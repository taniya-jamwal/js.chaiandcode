// const tinderUser =new Object() //empty object // singleton
      //or
const tinderUser={} //empty object  //non-singleton

tinderUser.id="123abc"
tinderUser.name="tani"
tinderUser.isLoggedIn=false

// console.log(tinderUser);

const regularUser={

    email:"someone@gmail.com",
    fullname:{
        userfullname:{
            firstname:"taniya",
            lastname:"jamwal"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);
 // ? used to check if the value is there or not

 const obj1={1:"a",2:"b"}
 const obj2={4:"a",3:"b"}
 const obj4={5:"a",6:"b"}

//  const obj3={obj1,obj2}
// const obj3= Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2}
//  console.log(obj3);

const users={
    id:1
    email:"taniiya@gb.com"

}
