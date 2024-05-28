// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
// which prints the name of each magician in the array.

// define a function to print each name of magician from an array
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// define an array containing magician names
var magician_name = ["Harry Portar", "Magneto", "Charles Xevier"];
// call the function to print each magician name
show_magicians(magician_name);
