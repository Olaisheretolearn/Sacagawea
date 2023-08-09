## 🌐 Sacagawea: A Maze Generation and Navigation Simulator

Welcome to **Sacagawea**, a captivating web-based tool designed to visualize the generation and navigation of a maze using recursive Backtracking.. Not only does Sacagawea carve out a unique maze for you, but it also simulates the journey of a mouse 🐭 through the maze, showcasing the algorithm's capabilities!

### 🌟 Features

- **🌀 Maze Generation**: Constructs a visually pleasing maze using Recursive Backtracking.
- **🐭 Mouse Simulation**: Watches as a mouse navigates its way through the maze.
- **🎨 Visual Appeal**: Distinct colors and visual elements make understanding and visualization easier.

### 📋 Usage

1. **Initialize**:
   - The maze and mouse properties are initialized upon starting the program.
   
2. **View Maze Generation**:
   - Observe as the maze is carved out cell by cell using a recursive algorithm.
   
3. **Mouse's Journey**:
   - Once the maze is generated, you'll see the mouse try to navigate its way to the exit.

### 🔍 Code Overview

- **Setup**: The canvas size and maze parameters are initialized.
- **Draw**: This is the core loop, visualizing the maze and moving the mouse.
- **Maze Generation**: A combination of the `generateMaze`, `carvePath`, and `getNeighbors` functions generate a unique maze using Recursive Backtracking.
- **Mouse Movement**: Functions like `moveMouse` and `getValidMoves` govern the mouse's path.
- **Visualization**: The `drawMaze` function is responsible for drawing the maze on the canvas, with a distinct color for the mouse's position.

### 🚀 Getting Started

1. Ensure you've integrated the provided JavaScript code into your project.
2. Use a library like p5.js to facilitate the drawing and visualization aspects.
3. Launch the simulator to visualize the maze generation and mouse movement.

### 🤝 Contributions

Your collaboration can help make Sacagawea even better! 🤗 If you've got ideas, suggestions, or improvements in mind, please feel free to contribute.

### 📜 License

[MIT](https://choosealicense.com/licenses/mit/)

### 📣 Feedback

Sacagawea was crafted with love and precision. If you find it useful or wish to suggest improvements, please let us know. Every bit of feedback helps in refining and perfecting! 🌟

