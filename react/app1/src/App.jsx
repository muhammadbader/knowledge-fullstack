import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Navbar";
import Employees from "./employees";
import Clients from "./clients";
import Footer from "./footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <Employees />
      <Clients />
      <Footer />
    </div>
  );
}

export default App;
