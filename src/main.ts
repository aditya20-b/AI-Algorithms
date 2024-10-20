import { Graph, Node } from './types';
import { breadthFirstSearch } from './algorithms/BFS';
import { depthFirstSearch } from './algorithms/DFS';
import { hillClimbingSearch } from './algorithms/HillClimbSearch';
import { aStarSearch } from './algorithms/Astar';

const nodeA: Node = { id: 'A', neighbors: [] };
const nodeB: Node = { id: 'B', neighbors: [] };
const nodeC: Node = { id: 'C', neighbors: [] };
const nodeD: Node = { id: 'D', neighbors: [] };

nodeA.neighbors.push({ node: nodeB, weight: 1 });
nodeA.neighbors.push({ node: nodeC, weight: 4 });
nodeB.neighbors.push({ node: nodeD, weight: 2 });
nodeC.neighbors.push({ node: nodeD, weight: 1 });

const graph: Graph = {
  nodes: new Map([
    ['A', nodeA],
    ['B', nodeB],
    ['C', nodeC],
    ['D', nodeD],
  ]),
};

const heuristic = (current: Node, goal: Node): number => {
  // Simple heuristic function for demonstration
  return Math.abs(current.id.charCodeAt(0) - goal.id.charCodeAt(0));
};

console.log('BFS:', breadthFirstSearch(graph, 'A', 'D'));
console.log('DFS:', depthFirstSearch(graph, 'A', 'D'));
console.log('Hill Climbing:', hillClimbingSearch(graph, 'A', 'D', heuristic));
console.log('A*:', aStarSearch(graph, 'A', 'D', heuristic));
