import { Graph, Node, PathResult } from '../types';
import { GraphUtility } from '../graphs';

export function aoStar(graph: Graph, startId: string, goalId: string): PathResult {
  const graphUtil = new GraphUtility(graph);
  const startNode = graphUtil.getNode(startId);
  const goalNode = graphUtil.getNode(goalId);

  if (!startNode || !goalNode) {
    throw new Error('Invalid start or goal node ID');
  }

  const visited: Set<Node> = new Set();
  const path: Node[] = [];

  function explore(node: Node): boolean {
    if (visited.has(node)) {
      return false;
    }

    visited.add(node);
    path.push(node);

    if (node === goalNode) {
      return true;
    }

    const neighbors = graphUtil.getNeighbors(node);
    if (neighbors.length === 0) {
      path.pop();
      return false;
    }

    let allSuccess = true;
    for (const neighbor of neighbors) {
      if (!explore(neighbor.node)) {
        allSuccess = false;
      }
    }

    if (!allSuccess) {
      path.pop();
    }
    return allSuccess;
  }

  explore(startNode);
  return { path, visitedNodes: Array.from(visited) };
}
