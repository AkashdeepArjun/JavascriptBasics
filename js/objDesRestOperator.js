
const hero={n:"deadpool",s:"troll and faster",r:10,i:true};


let{n,s,...rest}=hero;  //rest of paras stored as object

console.log(`name:${n}\nskills:${s}\nrest:${rest}`);
