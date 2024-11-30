// game.js

let craniins = 100; // Starting currency
let playerBleeks = [];

const craniinsDisplay = document.getElementById('craniins-count');
const startAdventureBtn = document.getElementById('start-adventure');
const gameArea = document.getElementById('game-area');

function startAdventure() {
    gameArea.innerHTML = `
        <h2>Adventure Started!</h2>
        <p>You are about to embark on a journey to collect Bleeks and earn Craniins!</p>
        <button id="battle-btn" class="btn">Fight a Bleek</button>
    `;
    document.getElementById('battle-btn').addEventListener('click', startBattle);
}

function startBattle() {
    const battleOutcome = Math.random() < 0.5 ? 'win' : 'lose';
    if (battleOutcome === 'win') {
        craniins += 20;
        craniinsDisplay.textContent = craniins;
        gameArea.innerHTML += `<p>You won the battle and earned 20 Craniins!</p>`;
    } else {
        craniins -= 10;
        craniinsDisplay.textContent = craniins;
        gameArea.innerHTML += `<p>You lost the battle and lost 10 Craniins.</p>`;
    }
}

// Event Listener to start the adventure
startAdventureBtn.addEventListener('click', startAdventure);
