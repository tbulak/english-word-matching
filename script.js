// game logic for word matching

// Difficulty levels
const difficulties = { easy: 1, medium: 2, hard: 3 };

// Game state
let currentLevel = difficulties.easy;
let score = 0;
let currentWord = '';
let matchedWords = [];

// Function to set difficulty
function setDifficulty(level) {
    currentLevel = difficulties[level];
}

// Function to generate a random word
function getRandomWord() {
    const words = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
    return words[Math.floor(Math.random() * words.length)];
}

// Start the game
function startGame() {
    currentWord = getRandomWord();
    console.log(`Match the word: ${currentWord}`);
}

// Check the answer
function checkAnswer(userInput) {
    if (userInput === currentWord) {
        score += currentLevel * 10;  // increase score based on difficulty
        matchedWords.push(userInput);
        console.log(`Correct! Your score is now: ${score}`);
        startGame(); // start a new round
    } else {
        console.log(`Incorrect! Try again.`);
    }
}

// Usage example
startGame();

// Assuming a user input function exists to call checkAnswer(userInput)
