// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
var pizza = ["Fajita", "Checken Cheese", "Malai Boti"];
// Using for loop
for (var _i = 0, pizza_1 = pizza; _i < pizza_1.length; _i++) {
    var onePizza = pizza_1[_i];
    console.log("\tI like ".concat(onePizza, " pizza."));
    console.log("\tI love to eat Pizza.");
}
// Print a message outside of the for loop
console.log("\n\tI Like Pizza.");
console.log("\n\tI Eat Pizza every weekend.");