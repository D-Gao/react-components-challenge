import PragmaticDND from "@/components/pragmatic-dnd/PragmaticDND";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Tiktok from "./components/tiktok";
import D3 from "./components/d3";
import MusicProgressBar from "./components/music-progress-bar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pragmatic" element={<PragmaticDND />} />
        <Route path="/tiktok" element={<Tiktok />} />
        <Route path="/d3" element={<D3 />} />
        <Route path="/music-progressbar" element={<MusicProgressBar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
