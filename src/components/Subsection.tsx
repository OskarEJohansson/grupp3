import { SubsectionTypes } from "../types";

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
