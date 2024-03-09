import './PlayerTwo.scss'

const PlayerTwo = ( {score} ) => {
  return (
    <main className='player-two'>
      <h2>Player 2</h2>
      <p className='token'>👑</p>
      <p className='score'>Score: {score} </p>
    </main>
  )
}

export default PlayerTwo