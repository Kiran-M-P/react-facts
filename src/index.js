import React from "react";
import ReactDOM from "react-dom";

import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";
import "./index.css";

ReactDOM.render(
  <div className="page">
    <Header />
    <MainContent />
    <Footer />
  </div>,
  document.getElementById("root")
);
