import { Graph, Node, PathResult } from '../types';
import { GraphUtility } from '../graphs';

export function britishMuseumSearch(graph: Graph, startId: string, goalId: string): PathResult {
  const graphUtil = new GraphUtility(graph);
  const startNode = graphUtil.getNode(startId);
  const goalNode = graphUtil.getNode(goalId);

  if (!startNode || !goalNode) {
    throw new Error('Invalid start or goal node ID');
  }

  const stack: Node[] = [startNode];
  const visited: Set<Node> = new Set();
  let found = false;

  while (stack.length > 0 && !found) {
    const currentNode = stack.pop()!;
    visited.add(currentNode);

    if (currentNode === goalNode) {
      found = true;
      break;
    }

    for (const neighbor of graphUtil.getNeighbors(currentNode)) {
      if (!visited.has(neighbor.node)) {
        stack.push(neighbor.node);
      }
    }
  }

  return { path: Array.from(visited), visitedNodes: Array.from(visited) };
}
