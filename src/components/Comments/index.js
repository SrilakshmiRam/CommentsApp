import {Component} from 'react'

import {v4} from 'uuid'

import './index.css'
import CommentItem from '../CommentItem/index'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]


class Comments extends Component {
  state = {nameInput: '', commentInput: '', commentsList: []}

  deleteComment = id => {
    const {commentsList} = this.state

    this.setState({
      commentsList: commentsList.filter(comment => comment.id !== id),
    })
  }

  toggleBtn = commendId => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (eachComment.id === commendId) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  onChangeName = event => {
    this.setState({nameInput: event.target.value})
  }

  onChangedescription = event => {
    this.setState({commentInput: event.target.value})
  }

  addComment = event => {
    event.preventDefault()
    const {nameInput, commentInput} = this.state

    const initialBgColorClassnName = `Math.ceil(
      Math.random() * initialContainerBackgroundClassNames.length - 1,
    )
    `

    const newComment = {
      id: v4(),
      name: nameInput,
      comment: commentInput,
      date: new Date(),
      isLiked: false,
      initialClassName: initialBgColorClassnName,
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
    }))

    this.setState({
      nameInput: '',
      commentInput: '',
    })
  }

  renderCommentsList = () => {
    const {commentsList} = this.state
    return commentsList.map(eachComment => (
      <CommentItem
        commentDetails={eachComment}
        key={eachComment.id}
        deleteComment={this.deleteComment}
        toggleBtn={this.toggleBtn}
      />
    ))
  }

  render() {
    const {commentsList, nameInput, commentInput} = this.state

    return (
      <div className="app-container">
        <div className="comments-container">
          <div className="text-container">
            <h1 className="heading">Comments</h1>
            <p className="text">Say something about 4.0 Technologies</p>
            <form onSubmit={this.addComment} className="form-container">
              <input
                placeholder="Your Name"
                className="input"
                value={nameInput}
                onChange={this.onChangeName}
              />
              <textarea
                cols="30"
                rows="10"
                placeholder="Your Comment"
                className="input-lines"
                value={commentInput}
                onChange={this.onChangedescription}
              >
                {' '}
              </textarea>
              <button type="submit" className="button">
                Add Comment
              </button>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
            className="comments-image"
          />
        </div>
        <hr className="hr-rule" />
        <div>
          <p className="count">
            <span className="commentscount">{commentsList.length}</span>{' '}
            Comments
          </p>
          <ul className="comments-list">{this.renderCommentsList()}</ul>
        </div>
      </div>
    )
  }
}

export default Comments