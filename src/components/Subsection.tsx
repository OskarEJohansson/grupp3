import { useNavigate } from "react-router-dom";
import { SubsectionTypes } from "../types";
import UseGlobalState from "./GlobalState";

interface SubsectionInterface {
  subsectionProps: SubsectionTypes;
}

const Subsection = ({ subsectionProps }: SubsectionInterface) => {
  const navigation = useNavigate();
  const useGlobalState = UseGlobalState((state: any) => state);

  const handleOnClick = () => {
    navigation(`/food-page/${subsectionProps.title} `);
    useGlobalState.setCategory(subsectionProps.title);
  };

  return (
    <div>
      <p>{subsectionProps.title}</p>
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
