import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "../assets/vite.svg";
import "./App.css";
import { Step1 } from "./Steps/Step1";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Step2 } from "./Steps/Step2";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <ToastContainer />
      <Step1 />
      <Step2 />
    </div>
  );
}

export default App;
