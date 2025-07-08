// Queueing System for 5 customers

let queue = []; // initial empty queue

// Step 1: Customer enters name
for (let i = 0; i < 5; i++) {
    let name = prompt("Enter customer name:");
    queue.push(name);
    alert(`Hello ${name}, your number is ${i + 1}`);
}

console.log("Initial Queue: " + queue.join(", "));

// Step 2: Call customers for service
while (queue.length > 0) {
    let num = prompt(`Enter the number of customer to service (1-${queue.length}):`);
    let index = parseInt(num) - 1;
    if (index >= 0 && index < queue.length) {
        let served = queue.splice(index, 1)[0];
        alert(`${served} has been serviced.`);
        console.log("Updated Queue: " + queue.join(", "));
    } else {
        alert("Invalid number. Try again.");
    }
}

alert("All customers have been serviced.");
