import React, { useState } from 'react';

export const CommentBox: React.FC<{ onCommentSubmit?: (comment: string) => void }> = ({ onCommentSubmit }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (onCommentSubmit) {
      onCommentSubmit(comment);
    }
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write your comment here..."
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export const CommentList: React.FC<{ comments: string[] }> = ({ comments }) => (
  <div>
    <h3>Comments:</h3>
    <ul>
      {comments && comments.length > 0 ? (
        comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))
      ) : (
        <li>No comments yet</li>
      )}
    </ul>
  </div>
);
