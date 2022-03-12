import React from "react";
import { removeQuote, upvoteQuote, downvoteQuote } from "./quotesSlice";
import { useDispatch } from "react-redux";


function QuoteCard({ quote }) {
  const { content, author, votes, id } = quote
  const dispatch = useDispatch()

  const handleUpvoteClick = () => {
    dispatch(upvoteQuote(id))
  }

  const handleDownvoteClick = () => {
    dispatch(downvoteQuote(id))
  }

  const handleRemoveClick = () => {
    dispatch(removeQuote(id))
  }

  return (
    <div>
      <div className="card card-inverse card-success card-primary mb-3 text-center">
        <div className="card-block">
          <blockquote className="card-blockquote">
            <p>{content}</p>
            <footer>
              - author{""}
              <cite title="Source Title">{author}</cite>
            </footer>
          </blockquote>
        </div>
        <div className="float-right">
          <div
            className="btn-group btn-group-sm"
            role="group"
            aria-label="Basic example"
          >
            <button type="button" className="btn btn-primary" onClick={handleUpvoteClick}>
              Upvote
            </button>
            <button type="button" className="btn btn-secondary" onClick={handleDownvoteClick}>
              Downvote
            </button>
            <button type="button" className="btn btn-danger" onClick={handleRemoveClick}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div>Votes: {votes}</div>
        </div>
      </div>
    </div>
  );
}

export default QuoteCard;