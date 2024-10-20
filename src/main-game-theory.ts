
import { GameState, minimax } from './game-theory/Minmax';
import { alphaBetaPruning } from './game-theory/AlphaBetaPruning';

class ExampleGameState implements GameState {
  value: number;
  children: ExampleGameState[];

  constructor(value: number, children: ExampleGameState[] = []) {
    this.value = value;
    this.children = children;
  }

  isTerminal(): boolean {
    return this.children.length === 0;
  }

  evaluate(): number {
    return this.value;
  }

  getChildren(): ExampleGameState[] {
    return this.children;
  }
}

const gameState = new ExampleGameState(0, [
  new ExampleGameState(3),
  new ExampleGameState(5, [
    new ExampleGameState(6),
    new ExampleGameState(9),
  ]),
  new ExampleGameState(8),
]);

console.log('Minimax:', minimax(gameState, 3, true));
console.log('Alpha-Beta Pruning:', alphaBetaPruning(gameState, 3, -Infinity, Infinity, true));
