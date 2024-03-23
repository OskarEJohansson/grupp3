const InputFormBase = (value: string, id: string) => {
  const { setTitle } = FormGlobalState();
  return (
    <>
      <input
        type="text"
        value={value}
        id={id}
        onChange={(e) => setTitle(e.target.value)}
      />
    </>
  );
};

export default InputFormBase;
