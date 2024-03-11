import { useNavigate } from "react-router-dom";
import { SubsectionTypes } from "../types";
import FetchItem from "./FetchItem";

interface SubsectionInterface {
  subsectionProps: SubsectionTypes;
}

const Subsection = ({ subsectionProps }: SubsectionInterface) => {
  return (
    <div>
      <p>{subsectionProps.title}</p>
      <a href={`/subsection/food/fetchItem`}>CLICK</a>
      <br />
    </div>
  );
};

export default Subsection;
