function power(base, exponent) {
    // Base case: when the exponent is 0, return 1
    if (exponent === 0) {
        return 1;
    } else {
        // Recursive case: multiply the base by itself exponent times
        let result = base;
        for (let i = 1; i < exponent; i++) {
            result *= base;
        }
        return result;
    }
}

// Example usage:
const base = parseInt(prompt("Enter the base: "));
const exponent = parseInt(prompt("Enter the exponent: "));

const result = power(base, exponent);
console.log(`${base} raised to the power of ${exponent} is: ${result}`);
