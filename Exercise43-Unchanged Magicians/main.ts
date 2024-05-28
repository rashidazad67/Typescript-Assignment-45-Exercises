// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of
// the array of magicians’ names. Because the original array will be unchanged, return the new array and 
// store it in a separate array. Call show_magicians() with each array to show that you have one array of 
// the original names and one array with the Great added to each magician’s name.

function show_magicians(magicains) {
    magicains.forEach(function (name) { return console.log(name); });
}
function make_great(magicains) {
    return magicains.map(function (name) { return "The Great ".concat(name, "."); });
}
var magician_names = ["Charles Xevier", "Harry Poter", "Magneto"];
var great_magicians = make_great(magician_names);
//show_magicians(great_magicians)
// making a copy of origional array through .slice() function
var copy_magicians_names = magician_names.slice();
// modify the copied array to include the great with thier names
var copy_great_magicians = make_great(copy_magicians_names);
// show both arrays origional and copied
//origional
console.log("\nOrigional Array.\n");
show_magicians(magician_names);
//copied
console.log("\nCopied Array.\n");
show_magicians(copy_great_magicians);
