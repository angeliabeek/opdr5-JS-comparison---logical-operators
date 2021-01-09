const customersAge = 24;
const isFemale = true;
const driverStatus = 'bob';
const name = 'Sarah';
const totalAmount = 100;

// Opdracht 4 - Gebruik if/else statements
if (customersAge >= 18) {
    console.log("You may enter the bar");
}
else {
    console.log("You can't enter the bar");
}

if (isFemale) {
    console.log("Welcome to ladiesnight");
}
else {
    console.log("Men aren't welcome to ladiesnight");
}

if (driverStatus == 'bob') {
    console.log("You can drive home");
}
else {
    console.log("You can't drive home");
}

// Opdracht 5 - Comparison && Logical Operators
if (customersAge >= 18 && customersAge <= 25) {
    console.log("Je krijgt 50% korting!");
}
else {
    console.log("Je krijgt geen korting");
}

if (name == 'Sarah' || name == 'Bram') {
    console.log("Je krijgt een gratis biertje!");
}
else {
    console.log("Helaas krijg jij geen gratis biertje...");
}

if (totalAmount >= 25 && totalAmount <= 50) {
    console.log("Je krijgt een gratis portie (vega)bitterballen!");
}
else if (totalAmount >= 50 && totalAmount <= 100) {
    console.log("Je krijgt een gratis portie nachos!");
}
else if (totalAmount >= 100) {
    console.log("Je krijgt een gratis fles champagne!");
}
else {
    console.log("Helaas krijg je niks, je hebt een te laag bedrag aan drankjes besteld.");
}