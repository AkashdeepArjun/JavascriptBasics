
const curentDate = new Date();

console.log("current time is ",curentDate);


const customDate=new Date(2024,03,05,03,30,0,0);

console.log("custom date is",customDate);


// get year and month
console.log("now we will be getting month and year");
const year=customDate.getFullYear();
const month =customDate.getMonth();
const day=customDate.getDay();

const hours=customDate.getHours();

const minutes=customDate.getMinutes();

const seconds=customDate.getSeconds();

const milliSeconds=customDate.getMilliseconds();


console.log("year is",year);

console.log("month is",month);

console.log("day is ",day);


console.log("hours is ",hours);

console.log("minutes is ",minutes);

console.log("seconds is ",seconds);

console.log("milliseconds is ",milliSeconds);

console.clear();

    //DATE TO STRING FORMAT
console.log("lets convert date object to string");

console.log("ORIGNAL FORMAT:",curentDate);

console.log("STRING FORMAT",curentDate.toDateString());

console.log("ISO FORMAT",curentDate.toISOString());

console.log("LOCAL FORMAT",curentDate.toLocaleString());

curentDate.setDate(curentDate.getDate() - 1 );

console.log("INCREMENT DAY BY ONE",curentDate);
