import PragmaticDND from "@/components/pragmatic-dnd/PragmaticDND";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Tiktok from "./components/tiktok";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pragmatic" element={<PragmaticDND />} />
        <Route path="/tiktok" element={<Tiktok />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
