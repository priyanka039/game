const gameArea = document.getElementById('gameArea');
const scoreDisplay = document.getElementById('score');
const startButton = document.getElementById('startButton');

let snake = [{ x: 200, y: 200 }];
let direction = { x: 20, y: 0 };
let food = { x: 0, y: 0 };
let score = 0;
let gameInterval;

function drawSnake() {
    gameArea.innerHTML = '';
    snake.forEach(segment => {
        const snakeElement = document.createElement('div');
        snakeElement.style.left = `${segment.x}px`;
        snakeElement.style.top = `${segment.y}px`;
        snakeElement.classList.add('snake');
        gameArea.appendChild(snakeElement);
    });
}

function drawFood() {
    const foodElement = document.createElement('div');
    foodElement.style.left = `${food.x}px`;
    foodElement.style.top = `${food.y}px`;
    foodElement.classList.add('food');
    gameArea.appendChild(foodElement);
}

function generateFood() {
    food = {
        x: Math.floor(Math.random() * (gameArea.clientWidth / 20)) * 20,
        y: Math.floor(Math.random() * (gameArea.clientHeight / 20)) * 20
    };
}

function moveSnake() {
    const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };
    
    // Check for collisions with walls
    if (head.x < 0 || head.x >= gameArea.clientWidth || head.y < 0 || head.y >= gameArea.clientHeight) {
        clearInterval(gameInterval);
        alert('Game Over');
        return;
    }

    // Check for collisions with the snake itself
    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            clearInterval(gameInterval);
            alert('Game Over');
            return;
        }
    }

    snake.unshift(head);

    // Check for food collision
    if (head.x === food.x && head.y === food.y) {
        score++;
        scoreDisplay.textContent = `Score: ${score}`;
        generateFood();
    } else {
        snake.pop();
    }

    drawGame();
}

function changeDirection(event) {
    const keyPressed = event.keyCode;
    const LEFT = 37;
    const UP = 38;
    const RIGHT = 39;
    const DOWN = 40;

    const goingUp = direction.y === -20;
    const goingDown = direction.y === 20;
    const goingRight = direction.x === 20;
    const goingLeft = direction.x === -20;

    if (keyPressed === LEFT && !goingRight) {
        direction = { x: -20, y: 0 };
    }
    if (keyPressed === UP && !goingDown) {
        direction = { x: 0, y: -20 };
    }
    if (keyPressed === RIGHT && !goingLeft) {
        direction = { x: 20, y: 0 };
    }
    if (keyPressed === DOWN && !goingUp) {
        direction = { x: 0, y: 20 };
    }
}

function drawGame() {
    drawSnake();
    drawFood();
}

function startGame() {
    snake = [{ x: 200, y: 200 }];
    direction = { x: 20, y: 0 };
    score = 0;
    scoreDisplay.textContent = `Score: ${score}`;
    generateFood();
    clearInterval(gameInterval);
    gameInterval = setInterval(moveSnake, 100);
}

startButton.addEventListener('click', startGame);
document.addEventListener('keydown', changeDirection);

drawGame();
