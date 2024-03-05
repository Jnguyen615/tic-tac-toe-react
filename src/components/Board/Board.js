import React from 'react';
import './Board.scss'
import { useState, useEffect } from 'react'

const Board = ({ gameBoard }) => {
  const [gameState, setGameState] = useState(gameBoard);
  const [currentToken, setCurrentToken] = useState('🏰');
  const [winner, setWinner ] = useState(null)
  const [winningMessage, setWinningMessage] = useState('')


  useEffect(() => {
    checkWinner();
  }, [gameState, winner]);

  const handleBoxClick = (index) => {
    if (!gameState[index] && !winner) {  
      setGameState((prevGameState) => {
        const newGameState = [...prevGameState];
        newGameState[index] = currentToken;
        setCurrentToken(currentToken === '🏰' ? '👑' : '🏰');
        return newGameState;
      });
    }
  };
  
  useEffect(() => {
    checkWinner();
  }, [gameState, winner]);
  
  const checkWinner = () => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  
    const winningCombination = winningCombinations.find((combination) =>
      combination.every((index) => gameState[index] === gameState[combination[0]] && gameState[index])
    );
  
    if (winningCombination) {
      const winningPlayer = gameState[winningCombination[0]];
      setWinner(winningPlayer);
      setWinningMessage(`Player ${winningPlayer} wins!`);
    }
  };
  
  
  return (
    <div>
      <div className="board-container">
        {gameState.map((box, index) => (
          <button key={index} className="boxes" id={`${index}`} onClick={() => handleBoxClick(index)}>
            <p>{box}</p>
          </button>
        ))}
      </div>
      {winningMessage && <p>{winningMessage}</p>}
    </div>
  );
};

export default Board;

