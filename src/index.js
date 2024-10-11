import React from "react";
import ReactDOM from "react-dom/client";
import "./CSS/style.css";
import Header from "./CSS/header.jsx";
import Student from "./CSS/student.jsx";
//import App from './App';
//import reportWebVitals from './reportWebVitals';

function MainBody() {
  const whatWeWillLearn = "React";
  const totalLecture = 3;
  return (
    <div>
      <p>Total Lecture - {totalLecture}</p>
      <p>In this course, we will learn {whatWeWillLearn} using Taskopedia</p>
      <ul>
        <li>Basic Foundation</li>
        <li>Functional and class components</li>
      </ul>
      {/* <div>
        Enter task: <input maxLength={5} readOnly={true}></input>
      </div> */}
    </div>
  );
}

function Footer() {
  return (
    <h4 style={{ color: "gray", backgroundColor: "black" }}>Happy Coding</h4> // using object notation
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="container">
    <Header />
    <MainBody />
    <div className="row">Students enrolled</div>
    <Student progExp={4} fullName="Rutuja Deshmukh" />
    <Student progExp={3} fullName="Anishk Singh" />
    <Student progExp={3.5} fullName="Anant Sinha" />
    <Student progExp={3.1} fullName="Survesh Mandhare" />
    <Footer />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
