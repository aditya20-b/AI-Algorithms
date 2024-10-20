import { Graph, Node, Heuristic, PathResult } from '../types';
import { GraphUtility } from '../graphs';

export function beamSearch(graph: Graph, startId: string, goalId: string, heuristic: Heuristic, beamWidth: number): PathResult {
  const graphUtil = new GraphUtility(graph);
  const startNode = graphUtil.getNode(startId);
  const goalNode = graphUtil.getNode(goalId);

  if (!startNode || !goalNode) {
    throw new Error('Invalid start or goal node ID');
  }

  let frontier: Node[] = [startNode];
  const visited: Set<Node> = new Set();

  while (frontier.length > 0) {
    frontier.sort((a, b) => heuristic(a, goalNode) - heuristic(b, goalNode));
    frontier = frontier.slice(0, beamWidth);
    const nextFrontier: Node[] = [];

    for (const currentNode of frontier) {
      if (currentNode === goalNode) {
        return { path: [currentNode], visitedNodes: Array.from(visited) };
      }

      visited.add(currentNode);
      for (const neighbor of graphUtil.getNeighbors(currentNode)) {
        if (!visited.has(neighbor.node)) {
          nextFrontier.push(neighbor.node);
        }
      }
    }

    frontier = nextFrontier;
  }

  return { path: [], visitedNodes: Array.from(visited) };
}

