import { Routes, Route } from "react-router-dom";
import { Repos } from "./Pages/Repos";
import { Repo } from "./Pages/Repo";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Repos />} />
      <Route path="/repos/*" element={<Repo />} />
    </Routes>
  );
}
