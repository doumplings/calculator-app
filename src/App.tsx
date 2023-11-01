import "./App.css";
import ButtonGroup from "./components/ButtonGroup";
import { useState } from "react";

function App() {
  const [currentCalc, setCurrentCalc] = useState("");
  const [value, setValue] = useState("");
  const [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0,
  });

  const handleNumClick = (item: string) => {
    console.log(" Handle Num Click called");
    setValue((prev) => {
      return prev + item;
    });
    {
      calc.res === 0
        ? null
        : setCalc({
            ...calc,
            res: calculate(calc.res, Number(value + item), calc.sign),
          });
    }
    setCurrentCalc((prev) => prev + item);
  };

  console.log("currentval", value);

  const handleSignClick = (item: string) => {
    console.log("sign", item);
    setCalc((prev) => ({
      sign: item,
      num: Number(value),
      res: prev?.res || Number(value), // modify this section
    }));
    setValue("");
    setCurrentCalc((prev) => prev + item);
  };
  const calculate = (a: number, b: number, sign: string): number => {
    let res = 0;
    switch (sign) {
      case "+":
        res = a + b;
        break;
      case "-":
        res = a - b;
        break;
      case "*":
        res = a * b;
        break;
      case "/":
        res = a / b;
        break;
    }

    return res;
  };

  const handleEqualClick = () => {
    console.log("equal", calc.res);
    setCalc({
      ...calc,
      sign: "",
      num: 0,
      res: calc.res,
    });
    setValue("");
    setCurrentCalc("");
  };

  const handleClearClick = () => {
    setCalc({
      sign: "",
      num: 0,
      res: 0,
    });
    setValue("");
    setCurrentCalc("");
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
            <p className="display-value">{currentCalc}</p>
            <p className="display-res">{calc.res}</p>
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
