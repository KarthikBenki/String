let stringOne = "freeCodeCamp is best place to learn";
let stringTwo = "frontend and backend development";

//charAt()
console.log(stringOne.charAt(1));//r
// charCodeAt()
console.log(stringOne.charCodeAt(1));//114

//concat()
console.log(stringOne.concat(stringTwo));

//endsWith() -> checks String or char at end index
console.log(stringOne.endsWith("learn"));//true
console.log(stringOne.endsWith("to"));//false

// fromCharCode() -> it is directly from string class
console.log(String.fromCharCode(114));//"r"

//includes() -> checks the exact match of the string in given string
console.log(stringTwo.includes("frontend"));//true
console.log(stringTwo.includes(" backend"));//true
console.log(stringTwo.includes("to"));//false

//indexOf() -> will return first available index
console.log(stringOne.indexOf("end"));//-1 as this string doesnt contain end string
console.log(stringTwo.indexOf("end"));//5 

//lastIndexOf() -> will provide last available index else -1
console.log(stringTwo.lastIndexOf("end"));//17

//match()
console.log(stringTwo.match(/end/g));//[ 'end', 'end' ] will provide number of accourences in an array


//repeat()
console.log(stringOne.repeat(3));// concats 2 times or repeats three times

//replace()
console.log(stringTwo.replace(/end/g,"END")); // frontEND and backEND development

//search()
console.log(stringTwo.search(/end/g));
console.log(stringTwo.search("end"));// will give index of first accourence

//slice()
console.log(stringTwo.slice(2,4));//on

//split();

console.log(stringTwo.split(" "));//[ 'frontend', 'and', 'backend', 'development' ]

//startsWith()
console.log(stringOne.startsWith("free"));// true

//substr()
console.log(stringTwo.substr(2,4));//starts with two and will get 4 characters from 2nd index

//subString()
console.log(stringTwo.substring(2,4));

//toLowerCase()
console.log(stringOne.toLowerCase());

//toUpperCase()
console.log(stringTwo.toUpperCase());

//toLacaleUpperCase()
console.log(stringOne.toLocaleUpperCase());

//trim() -> will remove white spaces from the string
console.log("    SubscribeNow!     ".trim());

