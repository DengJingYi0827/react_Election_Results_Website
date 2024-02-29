import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect, Component } from "react";
import Layout from "./Layout";
import Homepage from "./pages/Homepage";
import MapPage from "./pages/MapPage";
import "./styles/reset.css";
import Overlay from "./component/overlayWin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />}></Route>
          <Route path="mappage" element={<MapPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
