// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array

//Defne variables
var mango = "mango";
var uppercaseMango = "MANGO";
var seven = 7;
var six = 6;
var fruits = ["Mango", "Orange", "Banana", "Apple"];
//test for equility and inequility with string varibale
console.log("\nIs mango equal to mango?");
console.log(mango == "mango");
console.log("\nIs mango not equal to mango?");
console.log(mango != "mango");
//tests: Using Lowercase function
console.log("\nIs MANGO equal to mango after converting to lowercase?");
console.log(uppercaseMango.toLowerCase() == "mango");
console.log("\nIs MANGO not equal to mango after converting to lowercase?");
console.log(uppercaseMango.toLowerCase() != "mango");
//Numerical tests.
console.log("\n Is seven equal to six?");
console.log(seven == six);
console.log("\n Is seven not equal to six");
console.log(seven != six);
console.log("\n Is seven greater than six?");
console.log(seven > six);
console.log("\n Is seven is less than six?");
console.log(seven < six);
//greater than or equal to
console.log("\n Is seven greater than or equal to 6?");
console.log(seven >= 6);
//less than or equal to
console.log("\n Is seven less than or equal to 6?");
console.log(seven <= 6);
//test AND(&&) & OR(||) operators
console.log("\n seven is not equal to 6 and seven is greater than 6");
console.log(seven != 6 && seven > 6);
console.log("\n seven is equal to 6 and seven is greater than 6");
console.log(seven == 6 && seven > 6);
console.log("\n seven is not equal to 6 OR seven is greater than 6");
console.log(seven != 6 || seven > 9);
console.log("\n seven is not equal to 6 OR seven is greater than 76");
console.log(seven == 67 || seven > 76);
// test whether an item include in array
console.log("\nIs Mango include in fruits array?");
console.log(fruits.includes("Mango"));
//not include
console.log("\n Is Mango not include in fruits array?");
console.log(!fruits.includes("Mango"));

