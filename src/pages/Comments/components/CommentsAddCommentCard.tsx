import CommentsGlobalState from "../utils/CommentsGlobalState";

const CommentsAddCommentCard = ({ id }: { id: string }) => {
  const { setComment, comment, postComment, URL } = CommentsGlobalState();

  const handleOnChange = (e: any) => {
    const { name, value } = e.target;
    setComment(name, value);
  };

  const handleOnClick = () => {
    postComment(URL, id, comment);
  };

  return (
    <div>
      <label>User</label>
      <input type="text" name="name" onChange={handleOnChange} />
      <label>Comment</label>
      <input type="text" name="comment" onChange={handleOnChange} />
      <button onClick={handleOnClick}>Submit comment</button>
    </div>
  );
};

export default CommentsAddCommentCard;
