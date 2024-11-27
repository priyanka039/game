Overview->
This is a classic Snake Game implemented using JavaScript, HTML, and CSS. The game allows players to control a snake that moves around the screen, eating food to grow in size while avoiding collisions with the walls and itself. 
The goal is to score as many points as possible by eating food items.

How It Works->
Initialization: The game initializes with a snake positioned at the center of the game area and an initial direction of movement. The score is set to zero, and a piece of food is generated at a random location within the game area.
Game Loop: The snake continuously moves in the current direction at a set interval. The game checks for collisions with the walls, itself, and food items.
Movement: The snake's position is updated based on the current direction. If the snake collides with the walls or itself, the game ends.
Food Collision: If the snake eats the food, its length increases, and a new piece of food is generated at a random location. The score is incremented accordingly.
User Input: The player can change the direction of the snake's movement using the arrow keys. The game prevents the snake from reversing its direction directly.

Technologies Used->
HTML: For creating the game structure and elements.
CSS: For styling the game elements.
JavaScript: For game logic, handling user input, and rendering the game.

How to Play->
Start the Game: Click the "Start" button to initialize the game.
Control the Snake: Use the arrow keys on your keyboard to change the direction of the snake.
Left Arrow: Move left
Up Arrow: Move up
Right Arrow: Move right
Down Arrow: Move down
Objective: Guide the snake to eat the food items that appear randomly on the screen. Each time the snake eats food, it grows longer, and your score increases.
Avoid Collisions: Do not let the snake collide with the walls or itself. If a collision occurs, the game will end, and an alert will notify you of the game over.

Features->
Dynamic Snake Movement: The snake moves smoothly across the game area.
Food Generation: Food items are generated at random locations within the game area.
Score Tracking: The game keeps track of the player's score and updates it in real-time.
Collision Detection: The game accurately detects collisions with walls, the snake itself, and food items.
Responsive Controls: The snake's direction can be controlled using the keyboard arrow keys.
Game Restart: Players can restart the game by clicking the "Start" button.
