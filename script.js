const players = [
    { name: 'Evan Longoria', position: '3B', years: '2008-2017' },
    { name: 'Carl Crawford', position: 'LF', years: '2002-2010' },
    // Add more players here
];

function validatePlayer(playerName) {
    return players.some(player => player.name.toLowerCase() === playerName.toLowerCase());
}

let score = 0;
const gridCells = document.querySelectorAll('.cell');
const scoreDisplay = document.getElementById('score');
const leaderboard = document.getElementById('leaderboard');
let leaderboardData = [];

function updateScore(points) {
    score += points;
    scoreDisplay.textContent = score;
}

function updateLeaderboard() {
    leaderboard.innerHTML = '';
    leaderboardData.sort((a, b) => b.score - a.score).forEach(entry => {
        const li = document.createElement('li');
        li.textContent = `${entry.name}: ${entry.score}`;
        leaderboard.appendChild(li);
    });
}

gridCells.forEach(cell => {
    cell.addEventListener('click', () => {
        let playerName = prompt('Enter a Tampa Bay Rays player:');
        if (validatePlayer(playerName)) {
            cell.innerHTML = playerName;
            updateScore(10); // Add points for a correct answer
        } else {
            alert('Invalid player name');
        }
    });
});

// Mock function to simulate adding to leaderboard
function addToLeaderboard(name, score) {
    leaderboardData.push({ name, score });
    updateLeaderboard();
}

// Example: Add some dummy data to the leaderboard
addToLeaderboard('Alice', 30);
addToLeaderboard('Bob', 50);
addToLeaderboard('Charlie', 40);
