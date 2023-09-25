// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore, gameOn} = props
  return (
    <nav>
      <div className="nav-item">
        <img
          className="logo"
          alt="emoji logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png "
        />
        <h1>Emoji Game</h1>
      </div>

      {gameOn ? (
        <div className="nav-item">
          <p>Score: {score}</p>
          <p>Top Score: {topScore}</p>
        </div>
      ) : (
        ''
      )}
    </nav>
  )
}

export default NavBar
