import React from "react";
import ReactDOM from "react-dom/client";
import "./CSS/style.css";
import Header from "./Layout/Header.jsx";
import Footer from "./Layout/Footer.jsx";
import MainBody from "./MainBody.jsx";

//import App from './App';
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div style={{ color: "grey" }}>
    <Header />
    <div className="px-4">
      <MainBody />
    </div>
    <Footer />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
