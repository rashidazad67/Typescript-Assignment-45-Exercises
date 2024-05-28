// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.

//Create an array
var userNames = ["Rashid", "Admin", "Amjad", "Naseem", "Ibrar"];
userNames = [];
if (userNames.length === 0) {
    console.log("\n\t Your Array is empty, we need to find some user");
}
else {
    //For each loop on array
    userNames.forEach(function (oneUser) {
        if (oneUser === "Admin") {
            console.log("\n\t Hello ".concat(oneUser, ", Would you like to see status report?"));
        }
        else {
            console.log("\n\t Hello ".concat(oneUser, ", thank you for login."));
        }
    });
}
