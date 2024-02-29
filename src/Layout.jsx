import { Outlet, Link } from "react-router-dom";
import React, { useState } from "react";
import Footer from "./component/footer";
import Header from "./component/header";
import Overlay from "./component/overlayWin";
import "./styles/style.css";

const Layout = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [inData, setinData] = useState(0);

  const changeState = (childdata, personID) => {
    setIsOverlayOpen(childdata);
    setinData(personID);
  };
  console.log(isOverlayOpen);
  // onValueChange = { handleValueChange };
  return (
    <div>
      <Overlay
        isOpen={isOverlayOpen}
        // onClose={() => setIsOverlayOpen(false)}
        overlayToLayout={changeState}
        inData={inData}
      />
      <Header headerToLayout={changeState} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
