import "./ButtonGroup.css";
import { memo } from "react";

const buttonItems = [
  [7, 8, 9, "/"],
  [4, 5, 6, "*"],
  [1, 2, 3, "-"],
  [0, "C", "+", "="],
];

interface Props {
  onButtonClick: (item: any) => void;
}

function ButtonGroup({ onButtonClick }: Props) {
  return (
    <div>
      {buttonItems.flat().map((item) => (
        <button
          key={item}
          className="button-group"
          value={item}
          onClick={() => onButtonClick(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default memo(ButtonGroup);
