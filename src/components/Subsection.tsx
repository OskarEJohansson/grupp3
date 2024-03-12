import { useNavigate } from "react-router-dom";
import { SubsectionTypes } from "../types";
import FetchItem from "./FetchItem";

interface SubsectionInterface {
  subsectionProps: SubsectionTypes;
}

const Subsection = ({ subsectionProps }: SubsectionInterface) => {
  const navigation = useNavigate();

  const handleOnClick = () => {
    navigation(`food-page/${subsectionProps.title} `);

    return (
      <div>
        <FetchItem />
      </div>
    );
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
