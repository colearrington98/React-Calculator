import React, { useReducer } from "react";
import "./styles.css";

const initialState = {
  currentOperand: "",
  previousOperand: "",
  operation: "",
};

const ACTION = {
  ADD: "add",
  SUBTRACT: "subtract",
  MULTIPLY: "multiply",
  DIVIDE: "divide",
  CLEAR: "clear",
  DELETE: "delete",
  EQUAL: "equal",
  APPEND: "append",
  DECIMAL: "decimal",
};

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTION.ADD:
      return {
        ...state,
        previousOperand: state.currentOperand,
        currentOperand: "",
        operation: "+",
      };
    case ACTION.SUBTRACT:
      return {
        ...state,
        previousOperand: state.currentOperand,
        currentOperand: "",
        operation: "-",
      };
    case ACTION.MULTIPLY:
      return {
        ...state,
        previousOperand: state.currentOperand,
        currentOperand: "",
        operation: "*",
      };
    case ACTION.DIVIDE:
      return {
        ...state,
        previousOperand: state.currentOperand,
        currentOperand: "",
        operation: "/",
      };
    case ACTION.CLEAR:
      return {
        ...state,
        previousOperand: "",
        currentOperand: "",
        operation: "",
      };
    case ACTION.DELETE:
      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1),
      };
    case ACTION.EQUAL:
      return {
        ...state,
        currentOperand: eval(
          state.previousOperand + state.operation + state.currentOperand
        ).toString(),
        previousOperand: "",
        operation: "",
      };
    case ACTION.APPEND:
      return {
        ...state,
        currentOperand: state.currentOperand + payload,
      };
    case ACTION.DECIMAL:
      return {
        ...state,
        currentOperand: state.currentOperand + payload,
      };
    default:
      return state;
  }
}

function App() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const handleButtonClick = (type, payload) => {
    dispatch({ type, payload });
  };

  const buttons = [
    { type: ACTION.ADD, label: "+" },
    { type: ACTION.SUBTRACT, label: "-" },
    { type: ACTION.MULTIPLY, label: "*" },
    { type: ACTION.DIVIDE, label: "/" },
    { type: ACTION.APPEND, payload: "1", label: "1" },
    { type: ACTION.APPEND, payload: "2", label: "2" },
    { type: ACTION.APPEND, payload: "3", label: "3" },
    { type: ACTION.APPEND, payload: "4", label: "4" },
    { type: ACTION.APPEND, payload: "5", label: "5" },
    { type: ACTION.APPEND, payload: "6", label: "6" },
    { type: ACTION.APPEND, payload: "7", label: "7" },
    { type: ACTION.APPEND, payload: "8", label: "8" },
    { type: ACTION.APPEND, payload: "9", label: "9" },
    { type: ACTION.APPEND, payload: "0", label: "0" },
    { type: ACTION.DECIMAL, payload: ".", label: "." },
    { type: ACTION.EQUAL, label: "=" },
    { type: ACTION.CLEAR, label: "AC" },
    { type: ACTION.DELETE, label: "DEL" },
  ];

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">{previousOperand} {operation}</div>
        <div className="current-operand">{currentOperand}</div>
      </div>
      {buttons.map((button) => (
        <button
          key={button.label}
          onClick={() => handleButtonClick(button.type, button.payload)}
          className={`${
            button.type === ACTION.ADD ||
            button.type === ACTION.SUBTRACT ||
            button.type === ACTION.MULTIPLY ||
            button.type === ACTION.DIVIDE
              ? "operator"
              : ""
          } ${button.type === ACTION.CLEAR ? "span-two" : ""}`}
        >
          {button.label}
        </button>
      ))}
    </div>
  );
}

export default App;
