// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var personName = "Muhammad rashid azad";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(personName.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
var name1 = "my name is rashid";
console.log(name1);
var name2 = "MY NAME IS RASHID";
console.log(name2);
var name3 = "My Name is Rashid";
console.log(name3);
