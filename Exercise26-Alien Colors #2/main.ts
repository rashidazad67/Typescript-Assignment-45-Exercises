// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.

//Define variable
var alienColor = "Green";
//First version
if (alienColor === "Green") {
    //code Block
    console.log("\nPlayer earned 5 points for shooting the Alien.");
}
else {
    //code Block
    console.log("\n Player earned 10 points.");
}
//second version for else condition print
if (alienColor === "Blue") {
    //code Block
    console.log("\n This line is for if statement.");
}
else {
    //code Block
    console.log("\n This line is for else statment.");
}

