import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VendingMachine from "./VendingMachine";
import Candy from "./Candy";
import Chip from "./Chip";
import Soda from "./Soda";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VendingMachine />}></Route>
          <Route path="/candy" element={<Candy />}></Route>
          <Route path="/chip" element={<Chip />}></Route>
          <Route path="/soda" element={<Soda />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App