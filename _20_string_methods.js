let stringOne = "freeCodeCamp is best place to learn";
let stringTwo = "frontend and backend development";

// charAt() - returns the character at a specified index (position) in a string
console.log(stringOne.charAt(1)); // "r"

// charCodeAt() - returns the Unicode of the character at a specified index in a string
console.log(stringOne.charCodeAt(1)); // 114 (Unicode for 'r')

// concat() - joins two or more strings, and returns a new joined strings
console.log(stringOne.concat(stringTwo)); // "freeCodeCamp is best place to learnfrontend and backend development"

// endsWith() - checks if a string ends with specified string/characters
console.log(stringOne.endsWith("learn")); // true
console.log(stringOne.endsWith("to")); // false

// fromCharCode() - converts Unicode values to characters
console.log(String.fromCharCode(114)); // "r"

// includes() - checks if a string contains the specified string/characters
console.log(stringTwo.includes("frontend")); // true
console.log(stringTwo.includes(" backend")); // true
console.log(stringTwo.includes("to")); // false

// indexOf() - returns the position of the first occurrence of a specified value in a string
console.log(stringOne.indexOf("end")); // -1 (not found)
console.log(stringTwo.indexOf("end")); // 5 

// lastIndexOf() - returns the position of the last occurrence of a specified value in a string
console.log(stringTwo.lastIndexOf("end")); // 17

// match() - searches a string for a match against a regular expression, and returns the matches, as an Array object
console.log(stringTwo.match(/end/g)); // [ 'end', 'end' ] (all occurrences of "end")

// repeat() - returns a new string with a specified number of copies of an existing string
console.log(stringOne.repeat(3)); // "freeCodeCamp is best place to learnfreeCodeCamp is best place to learnfreeCodeCamp is best place to learn"

// replace() - searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced
console.log(stringTwo.replace(/end/g, "END")); // "frontEND and backEND development"

// search() - searches a string for a specified value, or regular expression, and returns the position of the match
console.log(stringTwo.search(/end/g)); // 5 (position of the first occurrence of "end")
console.log(stringTwo.search("end")); // 5

// slice() - extracts a part of a string and returns a new string, without modifying the original string
console.log(stringTwo.slice(2, 4)); // "on" (characters from index 2 to 4, not including 4)

// split() - splits a string into an array of substrings
console.log(stringTwo.split(" ")); // [ 'frontend', 'and', 'backend', 'development' ]

// startsWith() - checks if a string starts with specified string/characters
console.log(stringOne.startsWith("free")); // true

// substr() - extracts a part of a string, starting at a specified position, and returns a specified number of characters
console.log(stringTwo.substr(2, 4)); // "onte" (starts at index 2 and gets 4 characters)

// substring() - extracts characters from a string, between two specified indices
console.log(stringTwo.substring(2, 4)); // "on" (characters from index 2 to 4, not including 4)

// toLowerCase() - converts a string to lowercase letters
console.log(stringOne.toLowerCase()); // "freecodecamp is best place to learn"

// toUpperCase() - converts a string to uppercase letters
console.log(stringTwo.toUpperCase()); // "FRONTEND AND BACKEND DEVELOPMENT"

// toLocaleUpperCase() - converts a string to uppercase letters, according to the host's current locale
console.log(stringOne.toLocaleUpperCase()); // "FREECODECAMP IS BEST PLACE TO LEARN"

// trim() - removes whitespace from both sides of a string
console.log("    SubscribeNow!     ".trim()); // "SubscribeNow!"
