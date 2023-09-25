import {Component} from 'react'
import './index.css'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

class EmojiGame extends Component {
  state = {idList: [], score: 0, topScore: 0, gameOn: true}

  shuffleEmojisList = () => {
    const {emojisList} = this.props
    const shuffledList = [...emojisList]
    return shuffledList.sort(() => Math.random() - 0.5)
  }

  onClickImg = id => {
    const {idList, score, topScore} = this.state
    const res = score > topScore

    if (!idList.includes(id) && score < 11) {
      this.setState(prevState => ({
        score: prevState.score + 1,
        idList: [...prevState.idList, id],
      }))
    } else if (!idList.includes(id) && score === 11) {
      this.setState(prevState => ({
        idList: [...prevState.idList, id],
        score: prevState.score + 1,
        gameOn: false,
        topScore: res ? prevState.score + 1 : prevState.topScore,
      }))
    } else {
      this.setState(prevState => ({
        topScore: res ? prevState.score : prevState.topScore,
        gameOn: false,
        idList: [],
      }))
    }
  }

  resetGame = () => {
    this.setState({gameOn: true, score: 0, idList: []})
  }

  render() {
    const {score, topScore, idList, gameOn} = this.state
    const shuffledEmojisList = this.shuffleEmojisList()
    console.log(gameOn)
    console.log(idList)
    return (
      <div className="bg">
        <NavBar gameOn={gameOn} score={score} topScore={topScore} />

        {gameOn ? (
          <ul>
            {shuffledEmojisList.map(obj => (
              <EmojiCard
                key={obj.id}
                onClickImg={this.onClickImg}
                objDetails={obj}
              />
            ))}
          </ul>
        ) : (
          ''
        )}

        {gameOn ? (
          ''
        ) : (
          <WinOrLoseCard
            topScore={topScore}
            resetGame={this.resetGame}
            score={score}
          />
        )}
      </div>
    )
  }
}

export default EmojiGame
