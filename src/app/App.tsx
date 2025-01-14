import { useState, useEffect } from 'react';
import { Board } from '../components/Board';
import '../styles/App.css';

const target = 'knock'; // Example target word

export default function App() {
  const [guess, setGuess] = useState('');
  const [guesses, setGuesses] = useState<string[]>([]);
  const [message, setMessage] = useState('');
  const [gameOver, setGameOver] = useState(false);

  const updateGuess = (e: KeyboardEvent) => {
    if (gameOver) return;

    if (e.key === 'Enter' && guess.length === 5) {
      setGuesses([...guesses, guess]);
      setGuess('');
      if (guess === target) {
        setMessage('YOU WIN!');
        setGameOver(true);
      } else if (guesses.length === 5) {
        setMessage('Better luck next time!');
        setGameOver(true);
      }
    } else if (e.key.length === 1 && e.key.match(/[a-z]/i) && guess.length < 5) {
      setGuess(guess + e.key);
    } else if (e.key === 'Backspace' && guess.length > 0) {
      setGuess(guess.slice(0, -1));
    }
  };

  const resetGame = () => {
    setGuess('');
    setGuesses([]);
    setMessage('');
    setGameOver(false);
  };

  useEffect(() => {
    document.addEventListener('keydown', updateGuess, false);
    return () => {
      document.removeEventListener('keydown', updateGuess, false);
    };
  }, [guess, guesses, gameOver]);

  return (
    <div className="app">
      <Board guesses={guesses} currentGuess={guess} target={target} />
      {message && <h1 className="message">{message}</h1>}
      {gameOver && (
        <button className="reset-button" onClick={resetGame}>
          Reset
        </button>
      )}
    </div>
  );
}
