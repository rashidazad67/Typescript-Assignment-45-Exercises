// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that
// reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of 
//any size with a different message.

// Making a funtion
function make_shirt(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = "I Love TypeScript."; }
    console.log("\n\tCreating a ".concat(size, " shirt with the ").concat(printMessage, " prints on shirt."));
}
// calling funtion by-default values
make_shirt();
// calling funtion with medium size default message
make_shirt("Medium");
// calling funtion with small size and different print message
make_shirt("Small", "I Love JavaScript");
