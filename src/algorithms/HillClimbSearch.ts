import { Graph, Node, Heuristic, PathResult } from '../types';
import { GraphUtility } from '../graphs';

export function hillClimbingSearch(graph: Graph, startId: string, goalId: string, heuristic: Heuristic): PathResult {
  const graphUtil = new GraphUtility(graph);
  const startNode = graphUtil.getNode(startId);
  const goalNode = graphUtil.getNode(goalId);

  if (!startNode || !goalNode) {
    throw new Error('Invalid start or goal node ID');
  }

  const visited: Set<Node> = new Set();
  const path: Node[] = [startNode];
  let currentNode = startNode;

  while (currentNode !== goalNode) {
    visited.add(currentNode);

    const neighbors = graphUtil.getNeighbors(currentNode).filter(n => !visited.has(n.node));
    if (neighbors.length === 0) {
      break; // No more nodes to explore
    }

    neighbors.sort((a, b) => heuristic(a.node, goalNode) - heuristic(b.node, goalNode));
    currentNode = neighbors[0].node;
    path.push(currentNode);
  }

  return { path, visitedNodes: Array.from(visited) };
}
