import "./App.css";
import ButtonGroup from "./components/ButtonGroup";
import { useReducer, useCallback } from "react";
import reducer from "./ReducerFunction";

function App() {
  const [state, dispatch] = useReducer(reducer, {
    currentCalc: "",
    sign: "",
    num: "",
    res: 0,
  });
  console.log(state);
  const handleNumClick = useCallback((item: string) => {
    console.log(" Handle Num Click called");
    dispatch({ type: "number", clicked: item });
  }, []);

  const handleSignClick = useCallback((sign: string) => {
    dispatch({ type: "sign", clicked: sign });
  }, []);

  const handleEqualClick = () => {
    dispatch({ type: "=" });
  };

  const handleClearClick = () => {
    dispatch({ type: "C" });
  };

  const handleButtonClick = (item: any) => {
    if (item === "C") {
      handleClearClick();
    } else if (typeof item === "number") {
      handleNumClick(item.toString());
    } else if (item === "=") {
      handleEqualClick();
    } else {
      handleSignClick(item);
    }
  };

  return (
    <>
      <h1>Calculator App</h1>
      <div className="calculator-body">
        <div className="calculator-wrapper">
          <div className="calculator-screen">
            <p className="display-value">{state.currentCalc}</p>
            <p className="display-res">{state.res}</p>
          </div>
          <div className="button-box">
            <ButtonGroup onButtonClick={handleButtonClick}></ButtonGroup>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
