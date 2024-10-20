import { Graph, Node, Heuristic, PathResult } from '../types';
import { GraphUtility } from '../graphs';

export function bestFirstSearch(graph: Graph, startId: string, goalId: string, heuristic: Heuristic): PathResult {
  const graphUtil = new GraphUtility(graph);
  const startNode = graphUtil.getNode(startId);
  const goalNode = graphUtil.getNode(goalId);

  if (!startNode || !goalNode) {
    throw new Error('Invalid start or goal node ID');
  }

  const openSet: Node[] = [startNode];
  const visited: Set<Node> = new Set();

  while (openSet.length > 0) {
    openSet.sort((a, b) => heuristic(a, goalNode) - heuristic(b, goalNode));
    const currentNode = openSet.shift()!;
    visited.add(currentNode);

    if (currentNode === goalNode) {
      return { path: reconstructPathFromVisited(currentNode, visited), visitedNodes: Array.from(visited) };
    }

    for (const neighbor of graphUtil.getNeighbors(currentNode)) {
      if (!visited.has(neighbor.node)) {
        openSet.push(neighbor.node);
      }
    }
  }

  return { path: [], visitedNodes: Array.from(visited) };
}

function reconstructPathFromVisited(goalNode: Node, visited: Set<Node>): Node[] {
  const path: Node[] = [];
  let currentNode: Node | undefined = goalNode;
  while (currentNode && visited.has(currentNode)) {
    path.push(currentNode);
    currentNode = Array.from(visited).find(node => node.neighbors.some(neighbor => neighbor.node === currentNode));
  }
  return path.reverse();
}
