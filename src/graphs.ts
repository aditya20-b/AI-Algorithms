import { Graph, Node, NodeID, Neighbor } from "./types";

export class GraphUtility {
  constructor(public graph: Graph) {}

  getNode(nodeId: NodeID): Node | undefined {
    return this.graph.nodes.get(nodeId);
  }

  getNeighbors(node: Node): Neighbor[] {
    return node.neighbors;
  }

  getNeighborNodes(node: Node): Node[] {
    return this.getNeighbors(node).map((neighbor) => neighbor.node);
  }
}
