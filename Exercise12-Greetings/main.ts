// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, 
// print a message to them. The text of each message should be the same, but each message should be 
//personalized with the person’s name.

var friendsName = ["Rashid", "Amjad", "Ibrar", "Naseem"];
friendsName.forEach(function (friendName) { return console.log("Assalam O Alaikum ".concat(friendName, ", How are you?")); });
