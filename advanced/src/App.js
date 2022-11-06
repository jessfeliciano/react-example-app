import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Set from "./pages/Set";
import Card from "./pages/Card";
import Layout from './layouts';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/set" element={<Set />} />
        <Route path="/card" element={<Card />} />
      </Routes>
    </Layout>

  );
}

export default App;
