import './App.scss';
import React from 'react';
import Header from '../Header/Header';
import PlayerOne from '../PlayerOne/PlayerOne';
import PlayerTwo from '../PlayerTwo/PlayerTwo';
import Board from '../Board/Board';


function App() {
  const gameBoard = ['', '', '', '', '', '', '', '', ''];

  return (
    <main>
      <div className='App'>
        <PlayerOne />
        <Header />
        <PlayerTwo />
      </div>

      <div className='game-board'>
        <Board gameBoard={gameBoard}  />
      </div>
    </main>
  );
}

export default App;
