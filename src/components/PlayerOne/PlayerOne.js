import './PlayerOne.scss'

const PlayerOne = ( {score} ) => {
  return (
    <main className='player-one'>
      <h2>Player 1</h2>
      <p className='token'>🏰</p>
      <p className='score'>Score: {score} </p>
    </main>
  )
}

export default PlayerOne