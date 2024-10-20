import { Graph, Node } from './types';
import { breadthFirstSearch } from './algorithms/BFS';
import { depthFirstSearch } from './algorithms/DFS';
import { hillClimbingSearch } from './algorithms/HillClimbSearch';
import { aStarSearch } from './algorithms/Astar';
import { britishMuseumSearch } from './algorithms/BritishMuseumSearch';
import { beamSearch } from './algorithms/BeamSearch';
import { oracleSearch } from './algorithms/Oracle';
import { branchAndBoundAllNodes } from './algorithms/BranchAndBoundAll';
import { branchAndBoundGreedy } from './algorithms/BranchAndBoundGreedy';
import { branchAndBoundDeadHorse } from './algorithms/BranchAndBoundDeadHorse';
import { bestFirstSearch } from './algorithms/BestFirstSearch';
import { aoStar } from './algorithms/AOstar';

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
console.log('British Museum Search:', britishMuseumSearch(graph, 'A', 'D'));
console.log('Beam Search:', beamSearch(graph, 'A', 'D', heuristic, 2));
console.log('Oracle Search:', oracleSearch(graph, 'A', 'D', node => node.id === 'D'));
console.log('Branch and Bound (All Nodes):', branchAndBoundAllNodes(graph, 'A', 'D'));
console.log('Branch and Bound (Greedy):', branchAndBoundGreedy(graph, 'A', 'D'));
console.log('Branch and Bound (Dead Horse Principle):', branchAndBoundDeadHorse(graph, 'A', 'D'));
console.log('Best First Search:', bestFirstSearch(graph, 'A', 'D', heuristic));
console.log('AO* Search:', aoStar(graph, 'A', 'D'));
