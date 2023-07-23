import "./styles.css";

function App() {
  return (
    <div className="calculator-grid">
      <div className="output">
    <div className="previous-operand"></div>
      <div className="current-operand"></div>
    </div>
    <button className="span-two">AC</button>
    <button className="span-two">DEL</button>
    <button className="operator">÷</button>
    <button>1</button>
    <button>2</button>
    <button>3</button>
    <button className="operator">*</button>
    <button>4</button>
    <button>5</button>
    <button>6</button>
    <button className="operator">+</button>
    <button>7</button>
    <button>8</button>
    <button>9</button>
    <button className="operator">-</button>
    <button>0</button>
    <button>.</button>
    <button className="span-two">=</button>
  </div>


  )
}

export default App;
