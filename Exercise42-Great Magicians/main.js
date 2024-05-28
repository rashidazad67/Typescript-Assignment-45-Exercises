// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() 
// that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
// Call show_magicians() to see that the list has actually been modified.
function show_magicians(magicains) {
    magicains.forEach(function (name) { return console.log(name); });
}
function make_great(magicains) {
    return magicains.map(function (name) { return "The Great ".concat(name, "."); });
}
var magician_names = ["Charles Xevier", "Harry Poter", "Magneto"];
var great_magicians = make_great(magician_names);
show_magicians(great_magicians);
