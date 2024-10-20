import { Graph, Node, Heuristic, PathResult } from '../types';
import { GraphUtility } from '../graphs';

export function aStarSearch(graph: Graph, startId: string, goalId: string, heuristic: Heuristic): PathResult {
  const graphUtil = new GraphUtility(graph);
  const startNode = graphUtil.getNode(startId);
  const goalNode = graphUtil.getNode(goalId);

  if (!startNode || !goalNode) {
    throw new Error('Invalid start or goal node ID');
  }

  const openSet: Set<Node> = new Set([startNode]);
  const cameFrom: Map<Node, Node | null> = new Map();
  cameFrom.set(startNode, null);

  const gScore: Map<Node, number> = new Map();
  gScore.set(startNode, 0);

  const fScore: Map<Node, number> = new Map();
  fScore.set(startNode, heuristic(startNode, goalNode));

  while (openSet.size > 0) {
    let currentNode: Node | undefined;
    let lowestFScore = Infinity;

    for (const node of openSet) {
      const score = fScore.get(node) ?? Infinity;
      if (score < lowestFScore) {
        lowestFScore = score;
        currentNode = node;
      }
    }

    if (!currentNode) {
      break;
    }

    if (currentNode === goalNode) {
      return reconstructPath(cameFrom, goalNode);
    }

    openSet.delete(currentNode);
    for (const neighbor of graphUtil.getNeighbors(currentNode)) {
      const tentativeGScore = (gScore.get(currentNode) ?? Infinity) + (neighbor.weight ?? 1);
      if (tentativeGScore < (gScore.get(neighbor.node) ?? Infinity)) {
        cameFrom.set(neighbor.node, currentNode);
        gScore.set(neighbor.node, tentativeGScore);
        fScore.set(neighbor.node, tentativeGScore + heuristic(neighbor.node, goalNode));
        if (!openSet.has(neighbor.node)) {
          openSet.add(neighbor.node);
        }
      }
    }
  }

  return { path: [], visitedNodes: Array.from(openSet) };
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

