import { Graph, Node, PathResult } from '../types';
import { GraphUtility } from '../graphs';

export function oracleSearch(graph: Graph, startId: string, goalId: string, oracle: (node: Node) => boolean): PathResult {
  const graphUtil = new GraphUtility(graph);
  const startNode = graphUtil.getNode(startId);
  const goalNode = graphUtil.getNode(goalId);

  if (!startNode || !goalNode) {
    throw new Error('Invalid start or goal node ID');
  }

  const stack: Node[] = [startNode];
  const visited: Set<Node> = new Set();

  while (stack.length > 0) {
    const currentNode = stack.pop()!;
    visited.add(currentNode);

    if (oracle(currentNode)) {
      return { path: [currentNode], visitedNodes: Array.from(visited) };
    }

    for (const neighbor of graphUtil.getNeighbors(currentNode)) {
      if (!visited.has(neighbor.node)) {
        stack.push(neighbor.node);
      }
    }
  }

  return { path: [], visitedNodes: Array.from(visited) };
}

// AOstar.py
// Astar.py
// B&B_deadhorse.py
// B&b_Hei.py
// BFS.py
// BMS.py
// Beam.py
// Best1stSearch.py
// Branch_n_Bound.py
// DFS.py
// hill_climbing.py
// oracle.py