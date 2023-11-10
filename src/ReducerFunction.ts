interface State {
    currentCalc: string;
    sign: string;
    num: string;
    res: number;
  }
  
  interface Action {
    type: "number" | "C" | "=" | "sign";
    clicked?: string | number;
  }
  
 export default function reducer(state: State, action: Action) {
  
  
    const { type } = action;
    const prev = state;
  
    switch (type) {
      case "number": {
        if (prev.res === 0) {
          return {
            ...state,
            currentCalc: prev.currentCalc + action.clicked,
            num: prev.num + action.clicked,
          };
        } else {
          return {
            ...state,
            currentCalc: prev.currentCalc + action.clicked,
            num: prev.num + action.clicked,
            // res:
          };
        }
      }
      case "C": {
        return { ...state, currentCalc: "", num: "", res: 0, sign: "" };
      }
      case "sign": {
        return {
          ...state,
          currentCalc: prev.currentCalc + action.clicked,
          num: "",
          sign: typeof action.clicked === "string" ? action.clicked : prev.sign,
          res: prev.res === 0 ? Number(prev.num) :  calculate(prev.res, Number(prev.num), prev.sign)
        };
      }
      case "=": {
        return {
          ...state,
          sign: "",
          num: "",
          res: calculate(prev.res, Number(prev.num), prev.sign)
        };
      }
    }
  }
  
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
  