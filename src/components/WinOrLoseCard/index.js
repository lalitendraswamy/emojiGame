// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {score, resetGame, topScore} = props
  console.log(score >= topScore)
  console.log(score)
  console.log(topScore)
  return (
    <div className="wl-card">
      <div className="wl-inner">
        {score === 12 ? <h1>You Won</h1> : <h1>You Lose</h1>}
        <p className="wl-scoreh">{score === 12 ? 'Best Score' : 'Score'}</p>
        <p className="wl-score">{`${score}/12`}</p>
        <div>
          <button onClick={resetGame} className="wl-btn" type="button">
            Play Again
          </button>
        </div>
      </div>
      <img
        alt={score === 12 ? 'win' : 'lose'}
        src={
          score === 12
            ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
        }
      />
    </div>
  )
}

export default WinOrLoseCard
