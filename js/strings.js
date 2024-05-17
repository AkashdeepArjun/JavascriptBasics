//strings

let firstname="akashdeep";
let lastname="wadhwa";

//concatenation
let fname=firstname.concat(lastname);
console.log("concatination be like",fname);


//append
firstname+=lastname;
console.log("append be like",firstname);


//length of strings
console.log("length of string wadhwa is",lastname.length);

// cases
console.log("uppercase of string is",firstname.toUpperCase());

console.log("lets see if it modified orignal",firstname);

//lower case demo
let friend="GAURAV JASSAL";

console.log("lower case of string is ",friend.toLowerCase());

//slice
let word="WADHWA";
console.log("6 letter word after slicing from index 1 and 5 is ", word.slice(1,5));

// lets use negative index
// NOTE: from left index begins with 0 =>from right index begins with -1

console.log("cutting string from behind between index -6 and -4",word.slice(-6,-4));

//split and join
//NOTE :split function returns the array of word specified by separator
console.log("lets split word WADHWA by letter A",word.split('A'));

console.log("lets split word WADHWA by no space",word.split(''));

console.log("lets split word WADHWA by adding some space",word.split('  '));
// THIS WILL RETURN THE WHOLE STRING AS FIRST ELEMENT IN ARRAY SINCE THERE IS NO SPACE IN word


//JOIN FUNCTION RETURNS A STRING BASED ON CHARACTER MATCH PASSED ON
console.log(" lets see how join works on array output is ",word.split('A').join('=>'));
//joins the above array by appending symbol and returns as a string


//INCLUDES
console.log("let check if small w exist in word WADHWA",word.includes('w'));

console.log("let check if BIG W exist in word WADHWA",word.includes('W'));


//TRIM METHOD REMOVES THE WHITESPACES

word="\t\tPOTATO";
console.log("orignal word is ",word);

// word="\t\t\POTATO"
// console.log("after adding backspaces word is ",word);
console.log("trimmed word is",word.trim());


let desc=`lol
klool

ultralol
`;
console.log("trimming line with spaces ",desc.trim());
