//String
//To access any character in the string then varName[idx] is used 
let str="   Hello my name is suyash verma.";
console.log(str[5]);
//It shows undefined if it is outOfBound
//.length method is used to get the length of the string.
console.log(str.length);
console.log(str.toUpperCase());
//.trim() Trim remove the extra space
console.log(str.trim());
//trimStart() remove starting extra space.
//trimEnd() remove the ending extra Space.
//.includes() is used to check the string present or not it is case senstive.
console.log(str.includes("suyash"));
//indexOf() is used to find the char at the which idx.
console.log(str.indexOf('s'));
// gives -1 if not found 
//replace(what,with); is used to replace the word with the given word 
console.log(str.replace('hi','hello'));
//replaceAll() is used to replace all.
//conccat() is used to join two string 
//to join multiple string (,) is used 
//padStart(total characterLength,specialSymbol);
let mobileNumber='4811';
console.log(mobileNumber.padStart(10,'*')); 
//split() it give in the form of array and we can split from desired character
//templateString `` is used 
//${} is used to add variable
let str2="Hello i am suyash verma abes";
