function sumAsync(num1, num2, callback) {
    // Add num1 and num2 together 
    const result = num1 + num2;
    
    // Random delay between 1 and 5 seconds 
    const delay = Math.floor(Math.random() * 5000) + 1000;
    
    // Delay the execution
    setTimeout(() => {
        // Call the callback function with the result
        callback(result);
    }, delay);
}

// Test the sumAsync function
sumAsync(5, 10, (result) => {
    console.log("The sum is:", result);
});

// sumAsync, adds two numbers (num1 and num2) and uses a callback to return the result after a random delay betwn 1 and 5 seconds