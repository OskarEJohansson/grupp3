import { useNavigate } from "react-router-dom";
import { SubsectionTypes } from "../../types";
import UseGlobalState from "../GlobalState";

interface SubsectionInterface {
  subsectionProps: SubsectionTypes;
}

const Subsection = ({ subsectionProps }: SubsectionInterface) => {
  const navigate = useNavigate();
  const useGlobalState = UseGlobalState((state: any) => state);

  const handleOnClick = () => {
    navigate(`/${subsectionProps.category} `);
    useGlobalState.setCategory(subsectionProps.category);
  };

  return (
    <div>
      <p>{subsectionProps.category}</p>
      <img
        src={subsectionProps.picture}
        alt={subsectionProps.description}
        style={{ maxWidth: "300px" }}
        onClick={handleOnClick}
      />
      <br />
    </div>
  );
};

export default Subsection;
