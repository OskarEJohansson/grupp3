import { useNavigate } from "react-router-dom";
import { SubsectionTypes } from "../../types";
import UseGlobalState, { GlobalStateInterface } from "../GlobalState";
import { FetchCategory } from "./apiUtils";

interface SubsectionInterface {
  subsectionProps: SubsectionTypes;
}

const Subsection = ({ subsectionProps }: SubsectionInterface) => {
  const navigate = useNavigate();
  const useGlobalState = UseGlobalState<GlobalStateInterface>(
    (state: any) => state
  );

  const handleOnClick = async () => {
    navigate(`/${subsectionProps.category} `);
    useGlobalState.setCategory(subsectionProps.category);
    try {
      await FetchCategory();
    } catch (error) {
      console.error("Error fetching category data:", error);
      console.log(error);
    }
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
