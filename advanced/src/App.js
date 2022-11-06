import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Set from "./pages/Set";
import Card from "./pages/Card";

// TODO: set up routes here
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/set" element={<Set />} />
      <Route path="/card" element={<Card />} />
    </Routes>
  );
}

export default App;
