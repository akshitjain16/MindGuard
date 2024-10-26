const gameGrid = document.getElementById('gameGrid');
const restartBtn = document.getElementById('restartBtn');
const matchesFoundEl = document.getElementById('matchesFound');
const attemptsEl = document.getElementById('attempts');

let cardArray = [
    '🍎', '🍎', '🍌', '🍌', '🍇', '🍇', '🍉', '🍉',
    '🍓', '🍓', '🍒', '🍒', '🍍', '🍍', '🥝', '🥝'
];

let flippedCards = [];
let matchesFound = 0;
let attempts = 0;

// Shuffle the cards using Fisher-Yates shuffle
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Create the game board
function createBoard() {
    gameGrid.innerHTML = '';
    const shuffledCards = shuffle([...cardArray]);
    shuffledCards.forEach((symbol, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.symbol = symbol;
        card.addEventListener('click', flipCard);
        gameGrid.appendChild(card);
    });
}

// Flip a card
function flipCard() {
    if (flippedCards.length < 2 && !this.classList.contains('flipped')) {
        this.classList.add('flipped');
        this.textContent = this.dataset.symbol;
        flippedCards.push(this);

        if (flippedCards.length === 2) {
            checkForMatch();
        }
    }
}

// Check for a match
function checkForMatch() {
    attempts++;
    attemptsEl.textContent = attempts;

    const [card1, card2] = flippedCards;
    if (card1.dataset.symbol === card2.dataset.symbol) {
        matchesFound++;
        matchesFoundEl.textContent = matchesFound;

        // Disable further clicks on matched cards
        card1.removeEventListener('click', flipCard);
        card2.removeEventListener('click', flipCard);

        flippedCards = [];

        // Check if the game is completed
        if (matchesFound === cardArray.length / 2) {
            setTimeout(() => alert('Congratulations! You matched all pairs!'), 500);
        }
    } else {
        // Flip the cards back after a short delay
        setTimeout(() => {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            card1.textContent = '';
            card2.textContent = '';
            flippedCards = [];
        }, 1000);
    }
}

// Restart the game
function restartGame() {
    matchesFound = 0;
    attempts = 0;
    matchesFoundEl.textContent = matchesFound;
    attemptsEl.textContent = attempts;
    createBoard();
}

// Initialize the game
createBoard();
restartBtn.addEventListener('click', restartGame);
