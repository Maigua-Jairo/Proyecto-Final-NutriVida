import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import About from "./pages/about/About";
import Clases from "./pages/clases/Clases";
import "./App.css";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/about" element={<About />} />
      <Route path="/clases" element={<Clases />} />

    </Routes>
  );
}

export default App;
