// Generate a random number between 1 and n
const randomInt = (n) => Math.floor(Math.random() * n) + 1;


const play = () => {

    let numberToGuess = randomInt(101); // Generate a random number between 1 and 100
    console.log(`Hello World!, let's make a guessing game! here's a number to guess ${numberToGuess}`);

};

// Open your browser dev tools to see the console output
play();
