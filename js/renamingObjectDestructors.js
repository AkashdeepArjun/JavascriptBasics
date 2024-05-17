//traditional way

const superhero={name:"batman",rating:7};
const{n,r}=superhero;

console.log(`name ${n}\n rating ${r}`);


//rename variables

const {name:nm,rating:rt}=superhero;
console.log(`name:${nm}\nrating:${rt}`);
