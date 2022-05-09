import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Github from "./pages/Github";
import About from "./pages/About";
import Factorial from "./pages/Factorial";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
      <Route path="*" element={<Navigate replace to="/github" />}/>
      <Route index path="/github" element={<Github />} />
      <Route path="/about" element={<About />} />
      <Route path="/factorial" element={<Factorial />} />
    </Routes>
    </Layout>
  );
}

export default App;
