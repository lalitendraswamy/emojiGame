// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {objDetails, onClickImg} = props
  const {id, emojiName, emojiUrl} = objDetails
  const onImg = () => {
    onClickImg(id)
  }

  return (
    <li>
      <button onClick={onImg} type="button" className="img-btn">
        <img alt={emojiName} src={emojiUrl} />
      </button>
    </li>
  )
}

export default EmojiCard
