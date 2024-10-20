# Graph Algorithm Solver and Game Theory Algorithms

## Table of Contents
- [Introduction](#introduction)
- [Directory Structure](#directory-structure)
- [Graph Algorithm Solver](#graph-algorithm-solver)
  - [Implemented Algorithms](#implemented-algorithms)
  - [Usage](#usage)
- [Game Theory Algorithms](#game-theory-algorithms)
  - [Implemented Algorithms](#implemented-algorithms-1)
  - [Usage](#usage-1)
- [How to Run](#how-to-run)
- [Requirements](#requirements)
- [Installation](#installation)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This repository contains two projects:

1. **Graph Algorithm Solver** - A collection of different graph traversal and search algorithms implemented in TypeScript.
2. **Game Theory Algorithms** - Implementation of Minimax and Alpha-Beta Pruning algorithms for game-theoretic decision making, also written in TypeScript.

The purpose of these projects is to provide practical examples of graph and game theory algorithms for educational purposes and to solve real-world problems.

## Directory Structure

```
graph-algorithm-solver/
├── src/
│   ├── types.ts                      # Common type definitions
│   ├── Graph.ts                      # Graph utility functions
│   ├── algorithms/                   # Graph search algorithms
│   │   ├── BFS.ts                    # Breadth-First Search
│   │   ├── DFS.ts                    # Depth-First Search
│   │   ├── HillClimbingSearch.ts     # Hill Climbing Search
│   │   ├── AStar.ts                  # A* Search
│   │   ├── BritishMuseumSearch.ts    # British Museum Search
│   │   ├── BeamSearch.ts             # Beam Search
│   │   ├── OracleSearch.ts           # Oracle Search
│   │   ├── BranchAndBoundAllNodes.ts # Branch and Bound (All Nodes)
│   │   ├── BranchAndBoundGreedy.ts   # Branch and Bound (Greedy)
│   │   ├── BranchAndBoundDeadHorse.ts # Branch and Bound with Dead Horse Principle
│   │   ├── BestFirstSearch.ts        # Best First Search
│   │   ├── AOStar.ts                 # AO* Search
│   ├── game-theory/                  # Game theory algorithms
│   │   ├── Minimax.ts                # Minimax algorithm implementation
│   │   └── AlphaBetaPruning.ts       # Alpha-Beta pruning implementation
│   ├── main.ts                       # Main file for graph algorithms
│   ├── main-game-theory.ts           # Main file for game theory algorithms
├── package.json                      # Node.js package file for dependencies
├── tsconfig.json                     # TypeScript configuration file
└── README.md                         # Documentation of the project
```

## Graph Algorithm Solver

### Implemented Algorithms

The following graph traversal and search algorithms are implemented:

1. **Breadth-First Search (BFS)**
2. **Depth-First Search (DFS)**
3. **Hill Climbing Search**
4. **A* Algorithm**
5. **British Museum Search**
6. **Beam Search**
7. **Oracle Search**
8. **Branch and Bound (All Nodes)**
9. **Branch and Bound (Greedy)**
10. **Branch and Bound with Dead Horse Principle**
11. **Best First Search**
12. **AO* Search**

### Usage

The algorithms can be used by importing them from the `src/algorithms` directory and providing an appropriate `Graph` object. The `main.ts` file provides examples of how to use the implemented graph algorithms:

```typescript
import { breadthFirstSearch } from './algorithms/BFS';
import { depthFirstSearch } from './algorithms/DFS';
// ... other imports

const graph: Graph = {
  nodes: new Map([
    ['A', nodeA],
    ['B', nodeB],
    // ... other nodes
  ]),
};

console.log('BFS:', breadthFirstSearch(graph, 'A', 'D'));
```

## Game Theory Algorithms

### Implemented Algorithms

The following game theory algorithms are implemented:

1. **Minimax** - A decision rule for minimizing the possible loss for a worst-case scenario.
2. **Alpha-Beta Pruning** - An optimization technique for the minimax algorithm that reduces the number of nodes evaluated.

### Usage

The `Minimax.ts` and `AlphaBetaPruning.ts` files in the `src/game-theory` directory contain the implementations of these algorithms. The `main-game-theory.ts` file provides an example usage:

```typescript
import { minimax } from './game-theory/Minimax';
import { alphaBetaPruning } from './game-theory/AlphaBetaPruning';

const gameState = new ExampleGameState(0, [
  new ExampleGameState(3),
  new ExampleGameState(5, [
    new ExampleGameState(6),
    new ExampleGameState(9),
  ]),
  new ExampleGameState(8),
]);

console.log('Minimax:', minimax(gameState, 3, true));
console.log('Alpha-Beta Pruning:', alphaBetaPruning(gameState, 3, -Infinity, Infinity, true));
```

## How to Run

### Requirements

- [Node.js](https://nodejs.org/) (v12 or higher)
- [TypeScript](https://www.typescriptlang.org/)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/graph-algorithm-solver.git
   cd graph-algorithm-solver
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Compile the TypeScript code:

   ```sh
   npx tsc
   ```

4. Run the algorithms using Node.js:

   For Graph Algorithms:
   ```sh
   node dist/main.js
   ```

   For Game Theory Algorithms:
   ```sh
   node dist/main-game-theory.js
   ```

Alternatively, you can run TypeScript directly using `ts-node`:

```sh
npx ts-node src/main.ts
npx ts-node src/main-game-theory.ts
```

## Contributing

Contributions are welcome! If you have any suggestions, improvements, or new algorithms to add, feel free to open a pull request or issue.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

