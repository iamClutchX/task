import React from "react";
import reactLogo from "./assets/react.svg";
import './App.css';
const Child = (props) => {
  const card = {
    marginTop: "20px",
    padding: "2em",
    width: "300px",
    height: "300px",
    color: "white",
    borderRadius: "10px", 
    boxShadow: "0 0 2em #FF1E1E",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };
 
  return (
    <div>
      <div style={card}>
      <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <h3>You Are Child </h3>
        <h3>You Are Not Vote </h3>
        <p>Age: {props.age}</p>
      </div>
     
    </div>
  );
};

export default Child;
