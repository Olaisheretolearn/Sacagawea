// Maze size and cell size
let mazeSize = 20;
let cellSize = 30;

// Number of columns and rows in the maze grid
let cols, rows;

// 2D array to represent the maze
let maze;

// Rat's current position in the maze
let mouseCol, mouseRow;

// Setup function (runs once at the beginning)
function setup() {
  // Create a canvas with dimensions based on maze and cell sizes
  createCanvas(mazeSize * cellSize, mazeSize * cellSize);

  // Calculate the number of columns and rows based on canvas dimensions and cell size
  cols = width / cellSize;
  rows = height / cellSize;

  // Generate the maze
  maze = generateMaze();

  // Set the starting position of the rat to the top left corner
  mouseCol = 0;
  mouseRow = 0;
}

// Draw function (runs repeatedly in a loop)
function draw() {
  // Clear the background
  background(255);

  // Draw the maze
  drawMaze();

  // Check if the rat has reached the destination
  if (mouseCol == cols - 1 && mouseRow == rows - 1) {
    console.log("Mouse reached the exit!");
    noLoop(); // Stop the simulation
  } else {
    moveMouse(); // Move the rat
  }
}

// Function to draw the maze on the canvas
function drawMaze() {
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      // Set the fill color based on the cell type
      if (maze[i][j] == 'X') {
        fill(0); // Wall cell
      } else if (i == mouseCol && j == mouseRow) {
        fill(255, 0, 0); // Rat's current position
      } else {
        fill(255); // Open cell
      }
      // Draw a rectangle representing the cell
      rect(i * cellSize, j * cellSize, cellSize, cellSize);
    }
  }
}

// Function to move the rat in the maze
function moveMouse() {
  let validMoves = getValidMoves();

  if (validMoves.length > 0) {
    let randomIndex = floor(random(validMoves.length));
    let move = validMoves[randomIndex];

    if (move === 0 && mouseCol < cols - 1 && maze[mouseCol + 1][mouseRow] !== 'X') {
      mouseCol++; // Move right
    } else if (move === 1 && mouseRow < rows - 1 && maze[mouseCol][mouseRow + 1] !== 'X') {
      mouseRow++; // Move down
    } else if (move === 2 && mouseCol > 0 && maze[mouseCol - 1][mouseRow] !== 'X') {
      mouseCol--; // Move left
    } else if (move === 3 && mouseRow > 0 && maze[mouseCol][mouseRow - 1] !== 'X') {
      mouseRow--; // Move up
    }
  } else {
    console.log("Mouse is trapped!");
    noLoop();
  }
}

// Function to get the valid neighboring moves for the rat
function getValidMoves() {
  let validMoves = [];

  // Check the right cell
  if (mouseCol < cols - 1 && maze[mouseCol + 1][mouseRow] != 'X') {
    validMoves.push(0); // Right
  }
  
  // Check the bottom cell
  if (mouseRow < rows - 1 && maze[mouseCol][mouseRow + 1] != 'X') {
    validMoves.push(1); // Down
  }
  
  // Check the left cell
  if (mouseCol > 0 && maze[mouseCol - 1][mouseRow] != 'X') {
    validMoves.push(2); // Left
  }
  
  // Check the top cell
  if (mouseRow > 0 && maze[mouseCol][mouseRow - 1] != 'X') {
    validMoves.push(3); // Up
  }

  return validMoves;
}

// Function to generate the maze using Recursive Backtracking algorithm
function generateMaze() {
  let maze = [];

  // Initialize the maze grid with walls
  for (let i = 0; i < cols; i++) {
    maze[i] = [];
    for (let j = 0; j < rows; j++) {
      maze[i][j] = 'X';
    }
  }

  // Recursive function to carve paths in the maze
  function carvePath(x, y) {
    maze[x][y] = 'O'; // Open the current cell

    // Get random neighboring cells
    let neighbors = getNeighbors(x, y);

    // Randomly shuffle the neighbors array
    neighbors = shuffleArray(neighbors);

    // Loop through the neighbors
    for (let neighbor of neighbors) {
      let nx = neighbor[0];
      let ny = neighbor[1];

      // Check if the neighbor is within bounds and is a wall
      if (nx >= 0 && nx < cols && ny >= 0 && ny < rows && maze[nx][ny] === 'X') {
        // Connect the current cell with the neighbor
        maze[x + (nx - x) / 2][y + (ny - y) / 2] = 'O';
        carvePath(nx, ny); // Recursively carve the path from the neighbor
      }
    }
  }

  // Start carving paths from the top left corner (0, 0)
  carvePath(0, 0);

  // Open the bottom right corner
  maze[cols - 1][rows - 2] = 'O'; // Open the cell above the bottom right corner
  maze[cols - 2][rows - 1] = 'O'; // Open the cell left to the bottom right corner
  maze[cols - 1][rows - 1] = 'O'; // Open the bottom right corner

  return maze;
}


// Function to get neighboring cells (up, right, down, left) for a given cell
function getNeighbors(x, y) {
  let neighbors = [];

  // Right neighbor
  neighbors.push([x + 2, y]);

  // Bottom neighbor
  neighbors.push([x, y + 2]);

  // Left neighbor
   neighbors.push([x - 2, y]);

  // Top neighbor
  neighbors.push([x, y - 2]);

  return neighbors;
}

// Function to shuffle an array using the Fisher-Yates algorithm
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = floor(random(i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
