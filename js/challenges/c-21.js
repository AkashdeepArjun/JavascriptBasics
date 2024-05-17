let arr =[1,2,3];
let arr2=[4,5];

const user ={
    name:'john',
    age:22
};

const arr_arr2_clone=[...arr,...arr2];
// const arr2_clone={...arr2};
const user_clone={...user};

console.log("arr clone",arr_arr2_clone);
// console.log("arr2 clone",arr2_clone);
console.log("user clone",user_clone);
