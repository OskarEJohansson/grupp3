import React, { useState } from "react";

const CommentBox = ({ onSubmit }: { onSubmit: (comment: string) => void }) => {
  const [comment, setComment] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (comment.trim() !== '') {
      onSubmit(comment);
      setComment('');
      setError('');
    } else {
      setError('Please provide a comment');
    }
  };

  return (
    <div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Your comment"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CommentBox;
