// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!


"use strict";
// Creating an array
let favorite_fruits = ["Mango", "Apple", "Orange"];
if (favorite_fruits.includes("Mango")) {
    console.log("\n\t Mango is my Favorite fruit.\n");
}
if (favorite_fruits.includes("Apple")) {
    console.log("\n\t An Apple a day, keep the Doctor away.\n");
}
if (favorite_fruits.includes("Orange")) {
    console.log("\n\t I like Orange Juice.\n");
}
if (favorite_fruits.includes("Straberry")) {
    console.log("\n\t I like Straberry Juice.\n");
}
