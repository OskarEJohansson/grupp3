const Subsection = () => {
  let title = "Title";
  let picture = "Picture";

  return (
    <>
      <div>
        <button>
          {title}
          <br />
          {picture}
          <br />
        </button>
      </div>
      <div>
        {title}
        <br />
        {picture}
        <br />
      </div>
    </>
  );
};

export default Subsection;
