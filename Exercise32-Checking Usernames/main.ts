// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.


var current_users = ["Rashid", "Amjad", "Inrar", "Naseem", "Zahid"]; // Array of current users
var new_users = ["Jamil", "Alam", "Noman", "Rashid", "Amjad"]; // Array of new users
// Loop through new_users name to check to check for users name abailiability
new_users.forEach(function (new_one_user) {
    // making a condition new user name already exist and save in our_condition veriable
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    // Print messages using if-else statement.
    if (our_condition) {
        console.log("\n\nSorry ".concat(new_one_user, " is already taken."));
    }
    else {
        console.log("\n\nThis User name ".concat(new_one_user, " is available."));
    }
});
