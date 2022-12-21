import "./App.css";
import Home from "./components/Homepage/Home";
import { Routes, Route } from "react-router-dom";
import Breakfast from "./components/Filterpage/Breakfast";
import Breakfast1 from "./components/Filterpage/Breakfast1";
import Lunch from "./components/Filterpage/Lunch";
import Lunch1 from "./components/Filterpage/Lunch1";
import Snacks from "./components/Filterpage/Snacks";
import Dinner from "./components/Filterpage/Dinner";
import Drinks from "./components/Filterpage/Drinks";
import Nightlife from "./components/Filterpage/Nightlife";

import {
  Restaurent1,
  Restaurent2,
  Restaurent3,
  Restaurent4,
  Restaurent5,
  Restaurent6,
  Restaurent7,
  Restaurent8,
  Restaurent9,
  Restaurent10,
  Restaurent11,
} from "./components/Restaurent/Restaurent";
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="breakfast" element={<Breakfast />} />
        <Route path="breakfast1" element={<Breakfast1 />} />
        <Route path="lunch" element={<Lunch />} />
        <Route path="lunch1" element={<Lunch1 />} />
        <Route path="dinner" element={<Dinner />} />
        <Route path="drinks" element={<Drinks />} />
        <Route path="snacks" element={<Snacks />} />
        <Route path="nightlife" element={<Nightlife />} />
        <Route path="1" element={<Restaurent1 />} />
        <Route path="2" element={<Restaurent2 />} />
        <Route path="3" element={<Restaurent3 />} />
        <Route path="4" element={<Restaurent4 />} />
        <Route path="5" element={<Restaurent5 />} />
        <Route path="6" element={<Restaurent6 />} />
        <Route path="7" element={<Restaurent7 />} />
        <Route path="8" element={<Restaurent8 />} />
        <Route path="9" element={<Restaurent9 />} />
        <Route path="10" element={<Restaurent10 />} />
        <Route path="11" element={<Restaurent11 />} />
      </Routes>
    </>
  );
}
