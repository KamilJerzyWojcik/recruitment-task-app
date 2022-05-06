import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Github from "./pages/Github";
import About from "./pages/About";
import Factorial from "./pages/Factorial";

function App() {
  return (
    <Routes>
      <Route path="*" element={<Navigate replace to="/github" />}/>
      <Route index path="/github" element={<Github />} />
      <Route path="/about" element={<About />} />
      <Route path="/factorial" element={<Factorial />} />
    </Routes>
  );
}

export default App;
