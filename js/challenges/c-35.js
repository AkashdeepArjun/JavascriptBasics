
const mymap=new Map();
mymap.set("a",1);
mymap.set("b",2);
mymap.set("c",3);

console.log(mymap.get("a"));

console.log(`size of map is ${mymap.size}`);

console.log(`deleted key ${mymap.delete("b")}`);

console.log(`new size of map is ${mymap.size}`);
