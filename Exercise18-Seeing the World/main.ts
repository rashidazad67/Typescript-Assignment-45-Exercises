// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//MAking an array of countries and prints their names in origional order 
var countryName = ["Saudi Arabia", "Iraq", "India", "USA", "Egypt"];
console.log("\nOrigional Order:", countryName);
//Print he array in alphabetical order without modifaction in actual array list
console.log("Alphabetical Order:", __spreadArray([], countryName, true).sort());
//Show array is still in origional order
console.log("Still in Origional Order:", countryName);
//Print array in reverse order without modifaction in actual array list
console.log("Reverse Order:", __spreadArray([], countryName, true).reverse());
//Show array is still in origional order
console.log("Still in Origional Order:", countryName);
//Reversed the origional array name without copy
console.log("Origional array Reverse Order:", countryName.reverse());
//Print the array to shaow that its back to its origional order
console.log("Back to Origional Order:", countryName.reverse());
//Print he array to show that its order has been changed in alphabetical order
console.log("Sorted in Alphabetical Order:", countryName.sort());
//Reversed the origional array name again without copy
console.log("Origional array Reverse Order:", countryName.reverse());
