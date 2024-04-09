import AdminGlobalState from "../utils/AdminGlobalState";

interface InputFormBaseProps {
  inputLabel: string;
}

const AdminInputBasicInfo = ({ inputLabel }: InputFormBaseProps) => {
  const { setTitle, setDescription, setImageUrl } = AdminGlobalState();

  const handleOnChange = (e: any) => {
    switch (inputLabel) {
      case "title":
        setTitle(e.target.value);
        break;
      case "description":
        setDescription(e.target.value);
        break;
      case "image":
        setImageUrl(e.target.value);
        break;
    }
  };

  return (
    <div className="container mx-auto px-4">
      <div className="form-group">
        <label className="block text-gray-700">{inputLabel.charAt(0).toUpperCase() + inputLabel.slice(1)}</label>
        <input
          type="text"
          onChange={handleOnChange}
          className="block w-full bg-white border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
        />
      </div>
    </div>
  );
};

export default AdminInputBasicInfo;
