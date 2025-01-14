import { Cell } from './Cell';
import '../styles/Board.css';

type BoardProps = {
  guesses: string[];
  currentGuess: string;
  target: string;
};

export const Board = ({ guesses, currentGuess, target }: BoardProps) => {
  const getCellColor = (char: string, index: number, guess: string) => {
    if (target[index] === char) return 'green';
    if (target.includes(char)) {
      const targetCharCount = target.split('').filter((c) => c === char).length;
      const guessCharCount = guess
        .slice(0, index + 1)
        .split('')
        .filter((c) => c === char).length;
      if (guessCharCount <= targetCharCount) return 'yellow';
    }
    return 'gray';
  };

  const getChar = (rowIndex: number, cellIndex: number) => {
    return rowIndex < guesses.length
      ? guesses[rowIndex][cellIndex]
      : rowIndex === guesses.length
        ? currentGuess[cellIndex] || ''
        : '';
  };

  const getColor = (rowIndex: number, cellIndex: number, char: string) => {
    return rowIndex < guesses.length ? getCellColor(char, cellIndex, guesses[rowIndex]) : '';
  };

  return (
    <div className="board" data-testid="board">
      {Array.from({ length: 6 }).map((_, rowIndex) => (
        <div className="row" key={rowIndex} data-testid={`row-${rowIndex}`}>
          {Array.from({ length: 5 }).map((_, cellIndex) => {
            const char = getChar(rowIndex, cellIndex);
            const color = getColor(rowIndex, cellIndex, char);
            return <Cell key={cellIndex} char={char} color={color} />;
          })}
        </div>
      ))}
    </div>
  );
};
