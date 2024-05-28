// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you 
// actually have an empty list at the end of your program.
//Guest List array
var guestList = ["Farrukh", "Azeem", "Huzaifa", "Siddique"];
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
// Inform to the guest that only two guest can be invited for the dinner with me.
console.log("Unfortunately, due to unavailibility of bigger table i can invite only two guest for the dinner.");
// Removed guests from the list array until two guests names using while loop function.
while (guestList.length > 2) {
    var removeGuest = guestList.pop();
    console.log("Sorry, ".concat(removeGuest, " i can't invite you for the dinner today due to unavailibility of bigger table."));
}
// Sending invitaion to remaining two guests in the list array.
console.log("Invitation to remaining two guest.");
guestList.forEach(function (twoGuest) { return console.log("Dear ".concat(twoGuest, ", You are invited to dinner with me.")); });
// Removed last two guest from the List array
guestList.pop();
guestList.pop();
console.log("Empty List:", guestList);
