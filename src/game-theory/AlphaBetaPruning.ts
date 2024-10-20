import { GameState } from "./Minmax";


export function alphaBetaPruning(state: GameState, depth: number, alpha: number, beta: number, isMaximizingPlayer: boolean): number {
  if (depth === 0 || state.isTerminal()) {
    return state.evaluate();
  }

  if (isMaximizingPlayer) {
    let maxEval = -Infinity;
    for (const child of state.getChildren()) {
      const evalValue = alphaBetaPruning(child, depth - 1, alpha, beta, false);
      maxEval = Math.max(maxEval, evalValue);
      alpha = Math.max(alpha, evalValue);
      if (beta <= alpha) {
        break;
      }
    }
    return maxEval;
  } else {
    let minEval = Infinity;
    for (const child of state.getChildren()) {
      const evalValue = alphaBetaPruning(child, depth - 1, alpha, beta, true);
      minEval = Math.min(minEval, evalValue);
      beta = Math.min(beta, evalValue);
      if (beta <= alpha) {
        break;
      }
    }
    return minEval;
  }
}
