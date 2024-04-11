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
    
    <div className="my-4 p-4 border rounded">
      <label className="block mb-2">User</label>
      <input
        type="text"
        name="name"
        onChange={handleOnChange}
        className="block w-full border border-gray-300 rounded py-2 px-4 mb-2 focus:outline-none focus:border-blue-500"
      />
      <label className="block mb-2">Comment</label>
      <input
        type="text"
        name="comment"
        onChange={handleOnChange}
        className="block w-full border border-gray-300 rounded py-2 px-4 mb-2 focus:outline-none focus:border-blue-500"
      />
      <button
        onClick={handleOnClick}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none"
      >
        Submit comment
      </button>
    </div>
  );
};

export default CommentsAddCommentCard;
