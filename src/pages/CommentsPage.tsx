import React, { useState } from 'react';
import { CommentBox, CommentList } from '../components/Comment';

const CommentsPage: React.FC = () => {
  const [comments, setComments] = useState<string[]>([]);

  const handleCommentSubmit = (comment: string) => {
    setComments([...comments, comment]);
  };

  return (
    <div>
      <CommentBox onCommentSubmit={handleCommentSubmit} />
      <CommentList comments={comments} />
    </div>
  );
};

export default CommentsPage;
