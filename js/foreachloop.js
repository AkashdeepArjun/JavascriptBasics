const shows=["the boys","loki","daredevil","shehulk"];

// shows.forEach((item,index)=>{
//     console.log(`item index is ${index} value is ${item}`);
// });

console.log(`before applying function array is ${shows}`);

const result=shows.forEach((item, index,ar) => {
        ar[index]=item[0].toUpperCase()+item.substring(1);
});

console.log(`after applying fnction array is ${shows}`);
