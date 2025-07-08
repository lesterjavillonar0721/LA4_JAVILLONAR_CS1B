// Queueing System with Hash

let hashTable = [null, null, null, null, null];

let customersAdded = 0;

while (customersAdded < 5) {
    let name = prompt("Enter customer name:");
    let hashIndex = simpleHash(name);

    // Find empty slot if collision
    while (hashTable[hashIndex] !== null) {
        hashIndex = (hashIndex + 1) % 5;
    }

    hashTable[hashIndex] = name;
    alert(`Hello ${name}, your number is ${hashIndex + 1}`);
    customersAdded++;
}

console.log("Initial Hashed Table: " + hashTable.join(", "));

// Step 2: Call customers for service
let customersLeft = 5;
while (customersLeft > 0) {
    let num = prompt(`Enter the number of customer to service (1-5):`);
    let index = parseInt(num) - 1;
    if (index >= 0 && index < 5 && hashTable[index] !== null) {
        let served = hashTable[index];
        alert(`${served} has been serviced.`);
        hashTable[index] = null;
        console.log("Updated Hashed Table: " + hashTable.join(", "));
        customersLeft--;
    } else {
        alert("Invalid number or empty slot. Try again.");
    }
}

alert("All customers have been serviced.");

function simpleHash(name) {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
        hash += name.charCodeAt(i);
    }
    return hash % 5;
}
