import { Graph, Node, PathResult } from '../types';
import { GraphUtility } from '../graphs';

export function depthFirstSearch(graph: Graph, startId: string, goalId: string): PathResult {
  const graphUtil = new GraphUtility(graph);
  const startNode = graphUtil.getNode(startId);
  const goalNode = graphUtil.getNode(goalId);

  if (!startNode || !goalNode) {
    throw new Error('Invalid start or goal node ID');
  }

  const visited: Set<Node> = new Set();
  const path: Node[] = [];
  const result: PathResult = { path: [], visitedNodes: [] };

  function dfs(currentNode: Node): boolean {
    if (visited.has(currentNode)) {
      return false;
    }

    visited.add(currentNode);
    result.visitedNodes.push(currentNode);
    path.push(currentNode);

    if (currentNode === goalNode) {
      result.path = [...path];
      return true;
    }

    for (const neighbor of graphUtil.getNeighbors(currentNode)) {
      if (dfs(neighbor.node)) {
        return true;
      }
    }

    path.pop();
    return false;
  }

  dfs(startNode);
  return result;
}

