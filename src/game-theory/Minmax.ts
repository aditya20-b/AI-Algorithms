export interface GameState {
    isTerminal(): boolean;
    evaluate(): number;
    getChildren(): GameState[];
  }
  
  export function minimax(state: GameState, depth: number, isMaximizingPlayer: boolean): number {
    if (depth === 0 || state.isTerminal()) {
      return state.evaluate();
    }
  
    if (isMaximizingPlayer) {
      let maxEval = -Infinity;
      for (const child of state.getChildren()) {
        const evalValue = minimax(child, depth - 1, false);
        maxEval = Math.max(maxEval, evalValue);
      }
      return maxEval;
    } else {
      let minEval = Infinity;
      for (const child of state.getChildren()) {
        const evalValue = minimax(child, depth - 1, true);
        minEval = Math.min(minEval, evalValue);
      }
      return minEval;
    }
  }
  