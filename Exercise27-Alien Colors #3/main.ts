// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.


//Version 1.0 
// Define a veriable
var alienColor = "green";
//applying if and if-else statements
if (alienColor === "green") {
    console.log("(Version 1.0) You Shoot down a green aliean and earned 5 points");
}
else if (alienColor === "yellow") {
    console.log("You Shoot down a yellow aliean and earned 10 points");
}
else if (alienColor === "red") {
    console.log("You Shoot down a red aliean and earned 15 points");
}
//Version 2.0
var alienColor2 = "yellow";
if (alienColor2 === "green") {
    console.log("You Shoot down a green aliean and earned 5 points");
}
else if (alienColor2 === "yellow") {
    console.log("(Version 2.0) You Shoot down a yellow aliean and earned 10 points");
}
else if (alienColor2 === "red") {
    console.log("You Shoot down a red aliean and earned 15 points");
}
//Version 3.0
var alienColor3 = "red";
if (alienColor3 === "green") {
    console.log("You Shoot down a green aliean and earned 5 points");
}
else if (alienColor3 === "yellow") {
    console.log("You Shoot down a yellow aliean and earned 10 points");
}
else if (alienColor3 === "red") {
    console.log("(Version 3.0) You Shoot down a red aliean and earned 15 points");
}
