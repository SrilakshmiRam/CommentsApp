import {formatDistanceToNow} from 'date-fns'

import './index.css'

const CommentItem = props => {
  const {commentDetails, toggleBtn} = props
  const {name, comment, id, isLiked, initialclassName, date} = commentDetails

  const postedTime = formatDistanceToNow(date)

  const likeText = isLiked ? 'button active' : 'button'

  const likedImageUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const onDelete = () => {
    const {deleteComment} = props
    deleteComment(id)
  }

  const onToggle = () => {
    toggleBtn(id)
  }

  return (
    <li className="comment-item">
      <div className="comments-text">
        <div className={initialclassName}>
          <p className="initial">{name[0].toUpperCase()}</p>
        </div>
        <div className="container">
          <div className="title">
            <h1 className="name">{name}</h1>
            <p className="posted-time">{postedTime}</p>
          </div>
          <p>{comment}</p>
        </div>
      </div>
      <div className="buttons-container">
        <div className="like-container">
          <img src={likedImageUrl} alt="like" />
          <button type="button" className="like-btn" onClick={onToggle}>
            Like
          </button>
        </div>
        <button
          data-testid="delete"
          type="button"
          className="delete-button"
          onClick={onDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
      <hr className="hr-separation" />
    </li>
  )
}

export default CommentItem