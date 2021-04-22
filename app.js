const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const reset = document.querySelector('#reset');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const winningScoreSelect = document.querySelector('#playto');
const winningScoreOptions = winningScoreSelect.options;

let selectedIndex = winningScoreSelect.selectedIndex;
let winningScore = parseInt(winningScoreOptions[selectedIndex].value);
let gameInPlay = true;
let p1Score = 0;
let p2Score = 0;


p1Button.addEventListener('click', () => {
    if (gameInPlay) {
        p1Score += 1;
        p1Display.textContent = p1Score;
    }


    if (p1Score === winningScore) {
        gameInPlay = false;
        p1Display.classList.add('has-text-success');
        p2Display.classList.add('has-text-danger');
        p1Button.disabled = true;
        p2Button.disabled = true;
    }
});

p2Button.addEventListener('click', () => {
    if (gameInPlay) {
        p2Score += 1;
        p2Display.textContent = p2Score;
    }


    if (p2Score === winningScore) {
        gameInPlay = false;
        p2Display.classList.add('has-text-success');
        p1Display.classList.add('has-text-danger');
        p1Button.disabled = true;
        p2Button.disabled = true;
    }
});

winningScoreSelect.addEventListener('change', (e) => {
    winningScore = parseInt(e.target.value);
    resetGame();
});

reset.addEventListener('click', resetGame);

function resetGame() {
    p1Score = p2Score = p1Display.textContent = p2Display.textContent = 0;
    gameInPlay = true;
    p1Display.classList.remove('has-text-success', 'has-text-danger');
    p2Display.classList.remove('has-text-success', 'has-text-danger');
    p1Button.disabled = false;
    p2Button.disabled = false;
}















