import { Graph, Node, PathResult } from '../types';
import { GraphUtility } from '../graphs';

export function branchAndBoundGreedy(graph: Graph, startId: string, goalId: string): PathResult {
  const graphUtil = new GraphUtility(graph);
  const startNode = graphUtil.getNode(startId);
  const goalNode = graphUtil.getNode(goalId);

  if (!startNode || !goalNode) {
    throw new Error('Invalid start or goal node ID');
  }

  const queue: Node[] = [startNode];
  const visited: Set<Node> = new Set();
  const cameFrom: Map<Node, Node | null> = new Map();
  cameFrom.set(startNode, null);

  while (queue.length > 0) {
    const currentNode = queue.shift()!;
    visited.add(currentNode);

    if (currentNode === goalNode) {
      return reconstructPath(cameFrom, goalNode);
    }

    for (const neighbor of graphUtil.getNeighbors(currentNode)) {
      if (!visited.has(neighbor.node)) {
        visited.add(neighbor.node);
        cameFrom.set(neighbor.node, currentNode);
        queue.push(neighbor.node);
      }
    }
  }

  return { path: [], visitedNodes: Array.from(visited) };
}


function reconstructPath(cameFrom: Map<Node, Node | null>, goalNode: Node): PathResult {
    const path: Node[] = [];
    let currentNode: Node | null = goalNode;
    while (currentNode !== null) {
      path.push(currentNode);
      currentNode = cameFrom.get(currentNode) || null;
    }
    return { path: path.reverse(), visitedNodes: path };
  }