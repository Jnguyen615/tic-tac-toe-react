import './App.scss';
import React from 'react';
import Header from '../Header/Header';
import PlayerOne from '../PlayerOne/PlayerOne';
import PlayerTwo from '../PlayerTwo/PlayerTwo';
import Board from '../Board/Board';
import { useState } from 'react';

// function App() {
//   const [scores, setScores] = useState({ playerOne: 0, playerTwo: 0 });
//   const [currentPlayer, setCurrentPlayer] = useState('🏰')
//   const gameBoard = ['', '', '', '', '', '', '', '', ''];

//   const handleWin = (winningPlayer) => {
//     setScores((prevScores) => {
//       let updatedScores;

//       if (winningPlayer === '🏰') {
//         updatedScores = { ...prevScores, playerOne: prevScores.playerOne + 1 };
//       } else if (winningPlayer === '👑') {
//         updatedScores = { ...prevScores, playerTwo: prevScores.playerTwo + 1 };
//       } else {
//         updatedScores = prevScores;
//       }
      
//       return updatedScores;
//     });
//   };
  
//   const switchTurn = () => {
//     setCurrentPlayer((prevPlayer) => (prevPlayer === '🏰' ? '👑' : '🏰'));
//   };
  


//   return (
//     <main>
//     <div className='App'>
//       <PlayerOne className='playerOne' score={scores.playerOne} />
//       <Header />
//       <p>It's {currentPlayer === '🏰' ? '🏰' : '👑'}'s turn!</p>
//       <Board gameBoard={gameBoard} onWin={handleWin} />
//       <PlayerTwo className='playerTwo' score={scores.playerTwo} />
//     </div>
//     {/* <div className='game-board'> */}
//     {/* </div> */}
//   </main>
//   );
// }

// export default App;

function App() {
  const [scores, setScores] = useState({ playerOne: 0, playerTwo: 0 });
  const [currentPlayer, setCurrentPlayer] = useState('🏰');
  const gameBoard = ['', '', '', '', '', '', '', '', ''];

  const handleWin = (winningPlayer) => {
    setScores((prevScores) => {
      let updatedScores;

      if (winningPlayer === '🏰') {
        updatedScores = { ...prevScores, playerOne: prevScores.playerOne + 1 };
      } else if (winningPlayer === '👑') {
        updatedScores = { ...prevScores, playerTwo: prevScores.playerTwo + 1 };
      } else {
        updatedScores = prevScores;
      }

      return updatedScores;
    });
  };

  const switchTurn = () => {
    setCurrentPlayer((prevPlayer) => (prevPlayer === '🏰' ? '👑' : '🏰'));
  };

  const handleTokenPlaced = () => {
    // Switch turn immediately after a token is placed
    switchTurn();
  };

  return (
    <main>
      <div className='App'>
        <PlayerOne className='playerOne' score={scores.playerOne} />
        <Header />
        <p>It's {currentPlayer === '🏰' ? '🏰' : '👑'}'s turn!</p>
        <Board gameBoard={gameBoard} onWin={handleWin} onTokenPlaced={handleTokenPlaced} />
        <PlayerTwo className='playerTwo' score={scores.playerTwo} />
      </div>
    </main>
  );
}

export default App;