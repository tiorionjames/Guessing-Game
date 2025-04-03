function randomInt(n) {
    return Math.floor(Math.random() * n) + 1;
}


const highScores = {};

function play() {
    let numberToGuess;
    let setNumber = prompt("Do you want to set a secret number? Yes or no").toLowerCase();
        if (setNumber == "no") {
            numberToGuess = randomInt(100);
        } else {numberToGuess = parseInt(prompt("Enter your secret number."))}
            console.log(`Hello World! Let's make a guessing game! Here's a number to guess: ${numberToGuess}`);

    let username = prompt("What is your name?");

    if (!username) {
        alert("Please enter a valid name to play.");
        return play();
    }

    let limit;
    let setLimit = prompt("Do you want to set the guess limit to 4? Yes or no").toLowerCase();
        if (setLimit== "no") {
            limit = Infinity;
        } else {limit = 4}
            console.log(`limit is ${limit}`)

    let guess = parseInt(prompt("Guess a number between 1 and 100!"));
    let count = 1;
    const maxCount = limit
    let previousGuesses = [];

    while (guess !== numberToGuess) {
        if (isNaN(guess) || guess < 1 || guess > 100) {
            alert("Invalid input! Please enter a number between 1 and 100.");
        } else {
            previousGuesses.push(guess);

            if (guess < numberToGuess) {
                alert(`Sorry ${username}, guess higher!`);
            } else {
                alert(`Sorry ${username}, guess lower!`);
            }
        }

        guess = parseInt(prompt("Guess again:"));
        count++;

        if (count == maxCount) {
            alert("4 guess limit reached")
            break;
        }
    }

    if (guess == numberToGuess) {
        alert(`That's correct, ${username}! It took you ${count} guesses. Your previous guesses were: ${previousGuesses.join(", ")}.`);
        if (!(username in highScores) || count < highScores[username]) {
            highScores[username] = count;
            alert(`${username}, you've set a new high score with ${count} guesses!`);
        } else {
            alert(`${username}, your best score remains ${highScores[username]} guesses.`);
        }
    }

    console.log("Current High Scores:", highScores);

    let again = prompt("Do you want to play again? Yes or No").toLowerCase();

    if (again === "yes") {
        play();
    } else {
        alert("Thanks for playing!");
    }
}

play();
