// More Guests: You just found a bigger dinner table, so now more space is available. 
// Think of three more guests to invite to dinner.
// Start with your program from Exercise 15. Add a print statement to the end of your program informing 
// people that you found a bigger dinner table.
// Add one new guest to the beginning of your array.
// Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. 
// Print a new set of invitation messages, one for each person in your list.
//Guest List array
var guestList = ["Farrukh", "Azeem", "Huzaif", "Siddique"];
//Making variable for those guest who will not come
var notCome = guestList[0];
//Print the name of guest who will not come
console.log(notCome, "will not come.");
//Add or remove values from guest list array
guestList.splice(0, 1, "Umair");
console.log("Good news! we have found a bigger table for the Dinner.");
//Adding a new guest at the starting index of the array
guestList.unshift("Farhan");
//Adding a new guest at ending index of the array
guestList.push("Tanveer");
//Making a varible for storing a middle index of the array
var middleIndex = Math.floor(guestList.length / 2);
//Adding a new gust at the middle index of the array
guestList.splice(middleIndex, 0, "Rizwan");
console.log("Uploaded List of our Guests.");
guestList.forEach(function (oneguest) { return console.log("Assalam O Alaikum, ".concat(oneguest, ", would you like to come in Dinner.")); });
