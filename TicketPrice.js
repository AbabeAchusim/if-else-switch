const age = parseInt(prompt("Enter your age: "));
let ticketPrice;

if (age <= 12) {
    ticketPrice = 10;
} else if (age >= 13 && age <= 17) {
    ticketPrice = 15;
} else {
    ticketPrice = 20;
}

console.log(`The ticket price for your age (${age}) is $${ticketPrice}.`);
