import { useNavigate } from "react-router-dom";
import GlobalState, {
  GlobalStateInterface,
} from "../../../../components/GlobalState";
import { SubsectionTypes } from "../../../../types";

interface SubsectionInterface {
  subsectionProps: SubsectionTypes;
}
const Subsection = ({ subsectionProps }: SubsectionInterface) => {
  const navigate = useNavigate();
  const globalState = GlobalState<GlobalStateInterface>((state: any) => state);

  const handleOnClick = async () => {
    navigate(`/${subsectionProps.category} `);
    globalState.setCategory(subsectionProps.category);
    globalState.setGlobalCategoryData;
    console.log(globalState.globalCategoryData);
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
