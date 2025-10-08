// Game constants
const ROWS = 6;
const COLS = 7;
const PLAYER1 = 1;
const PLAYER2 = 2;

// Game state
let board = [];
let currentPlayer = PLAYER1;
let gameActive = true;
let animating = false;

// DOM elements
const boardElement = document.getElementById('board');
const currentPlayerElement = document.getElementById('current-player');
const turnIndicator = document.getElementById('turn-indicator');
const resetBtn = document.getElementById('reset-btn');
const winnerModal = document.getElementById('winner-modal');
const winnerText = document.getElementById('winner-text');
const playAgainBtn = document.getElementById('play-again-btn');

// Initialize the game
function initGame() {
    // Create empty board
    board = Array(ROWS).fill(null).map(() => Array(COLS).fill(0));
    currentPlayer = PLAYER1;
    gameActive = true;
    animating = false;
    
    // Clear board element
    boardElement.innerHTML = '';
    
    // Create columns
    for (let col = 0; col < COLS; col++) {
        const columnDiv = document.createElement('div');
        columnDiv.className = 'column';
        columnDiv.dataset.col = col;
        
        // Create cells in column
        for (let row = 0; row < ROWS; row++) {
            const cellDiv = document.createElement('div');
            cellDiv.className = 'cell empty';
            cellDiv.dataset.row = row;
            cellDiv.dataset.col = col;
            columnDiv.appendChild(cellDiv);
        }
        
        // Add click event to column
        columnDiv.addEventListener('click', () => handleColumnClick(col));
        
        boardElement.appendChild(columnDiv);
    }
    
    updatePlayerDisplay();
    winnerModal.classList.add('hidden');
}

// Handle column click
function handleColumnClick(col) {
    if (!gameActive || animating) return;
    
    // Find the lowest empty row in the column
    const row = getLowestEmptyRow(col);
    
    if (row === -1) {
        // Column is full
        return;
    }
    
    // Place piece
    placePiece(row, col);
}

// Get the lowest empty row in a column
function getLowestEmptyRow(col) {
    for (let row = 0; row < ROWS; row++) {
        if (board[row][col] === 0) {
            return row;
        }
    }
    return -1; // Column is full
}

// Place a piece on the board
function placePiece(row, col) {
    animating = true;
    board[row][col] = currentPlayer;
    
    // Get the cell element
    const cell = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
    cell.classList.remove('empty');
    
    // Create piece element
    const piece = document.createElement('div');
    piece.className = `piece player${currentPlayer}`;
    cell.appendChild(piece);
    
    // Wait for animation to complete
    setTimeout(() => {
        animating = false;
        
        // Check for win
        if (checkWin(row, col)) {
            handleWin();
            return;
        }
        
        // Check for draw
        if (checkDraw()) {
            handleDraw();
            return;
        }
        
        // Switch player
        currentPlayer = currentPlayer === PLAYER1 ? PLAYER2 : PLAYER1;
        updatePlayerDisplay();
    }, 500);
}

// Check if the current player has won
function checkWin(row, col) {
    const directions = [
        { dr: 0, dc: 1 },  // Horizontal
        { dr: 1, dc: 0 },  // Vertical
        { dr: 1, dc: 1 },  // Diagonal /
        { dr: 1, dc: -1 }  // Diagonal \
    ];
    
    for (const { dr, dc } of directions) {
        let count = 1;
        const winningCells = [[row, col]];
        
        // Check positive direction
        for (let i = 1; i < 4; i++) {
            const newRow = row + dr * i;
            const newCol = col + dc * i;
            
            if (newRow >= 0 && newRow < ROWS && newCol >= 0 && newCol < COLS &&
                board[newRow][newCol] === currentPlayer) {
                count++;
                winningCells.push([newRow, newCol]);
            } else {
                break;
            }
        }
        
        // Check negative direction
        for (let i = 1; i < 4; i++) {
            const newRow = row - dr * i;
            const newCol = col - dc * i;
            
            if (newRow >= 0 && newRow < ROWS && newCol >= 0 && newCol < COLS &&
                board[newRow][newCol] === currentPlayer) {
                count++;
                winningCells.push([newRow, newCol]);
            } else {
                break;
            }
        }
        
        // If 4 or more in a row, mark winning cells
        if (count >= 4) {
            markWinningCells(winningCells);
            return true;
        }
    }
    
    return false;
}

// Mark winning cells with animation
function markWinningCells(cells) {
    cells.forEach(([row, col]) => {
        const cell = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
        const piece = cell.querySelector('.piece');
        if (piece) {
            piece.classList.add('winning');
        }
    });
}

// Check if the game is a draw
function checkDraw() {
    return board[ROWS - 1].every(cell => cell !== 0);
}

// Handle win
function handleWin() {
    gameActive = false;
    const playerName = currentPlayer === PLAYER1 ? 'Spieler 1' : 'Spieler 2';
    winnerText.textContent = `🎉 ${playerName} gewinnt! 🎉`;
    setTimeout(() => {
        winnerModal.classList.remove('hidden');
    }, 800);
}

// Handle draw
function handleDraw() {
    gameActive = false;
    winnerText.textContent = '🤝 Unentschieden! 🤝';
    setTimeout(() => {
        winnerModal.classList.remove('hidden');
    }, 800);
}

// Update player display
function updatePlayerDisplay() {
    const playerName = currentPlayer === PLAYER1 ? 'Spieler 1' : 'Spieler 2';
    currentPlayerElement.textContent = playerName;
    
    // Update turn indicator
    turnIndicator.className = `piece player${currentPlayer}`;
}

// Event listeners
resetBtn.addEventListener('click', initGame);
playAgainBtn.addEventListener('click', initGame);

// Start the game
initGame();
