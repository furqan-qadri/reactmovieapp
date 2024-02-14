import { useState } from "react";
import "./App.css";
import NameChart from "./NameChart";
import Counter from "./Counter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NameChart name="Furqan" age="25" address="Kuala Lumpur" />
      <NameChart name="Ana" age="34" address="New York" />
      <br/>
      <Counter/>
    </>
  );
}

export default App;
