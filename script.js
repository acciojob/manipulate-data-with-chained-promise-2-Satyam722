//your JS code here. If required.
// Function that returns initial promise with 3-second delay
function manipulateData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4]);
        }, 3000);
    });
}

// Function to update the output div
function updateOutput(content) {
    const outputDiv = document.getElementById('output');
    outputDiv.textContent = content;
}

// Main function that chains the promises
function startTransformation() {
    manipulateData()
        .then(originalArray => {
            console.log('Initial array:', originalArray);
            
            // First transformation: Filter out odd numbers
            return new Promise((resolve) => {
                setTimeout(() => {
                    const evenNumbers = originalArray.filter(num => num % 2 === 0);
                    updateOutput(evenNumbers.join(','));
                    console.log('After filtering:', evenNumbers);
                    resolve(evenNumbers);
                }, 1000);
            });
        })
        .then(evenNumbers => {
            // Second transformation: Multiply even numbers by 2
            return new Promise((resolve) => {
                setTimeout(() => {
                    const doubledNumbers = evenNumbers.map(num => num * 2);
                    updateOutput(doubledNumbers.join(','));
                    console.log('After doubling:', doubledNumbers);
                    resolve(doubledNumbers);
                }, 2000);
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// Start the transformation when page loads
document.addEventListener('DOMContentLoaded', startTransformation);