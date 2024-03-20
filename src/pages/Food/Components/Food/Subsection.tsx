import { useNavigate } from "react-router-dom";
import { SubsectionTypes } from "../../../../types";
import GlobalState, {
  GlobalStateInterface,
} from "../../../../assets/Utilities/GlobalState";

interface SubsectionInterface {
  subsectionProps: SubsectionTypes;
}
const Subsection = ({ subsectionProps }: SubsectionInterface) => {
  const navigate = useNavigate();
  const globalState = GlobalState<GlobalStateInterface>((state) => state);

  const handleOnClick = () => {
    navigate(`${subsectionProps.category} `);
    globalState.setCategory(subsectionProps.category);
    globalState.setGlobalCategoryData(
      globalState.URL,
      subsectionProps.category
    );
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
