export type NodeID = string;

export interface Node {
  id: NodeID;
  neighbors: Neighbor[];
}

export interface Neighbor {
  node: Node;
  weight?: number;
}

export interface Graph {
  nodes: Map<NodeID, Node>;
}

export type Heuristic = (current: Node, goal: Node) => number;

export interface PathResult {
  path: Node[];
  visitedNodes: Node[];
}
