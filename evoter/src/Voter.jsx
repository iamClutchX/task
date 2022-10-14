import React from "react";
import reactLogo from "./assets/react.svg";
import './App.css';
const eligibleVoter = (props) => {
  const card = {
    marginTop: "20px",
    padding: "2em",
    width: "300px",
    height: "300px",
    color: "white",
    borderRadius: "10px",
   
    boxShadow: "0 0 2em #646cffaa",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };
 
  return (
    <div>
      <div style={card}>
       <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h3>You Can Vote </h3>
        <p>Age: {props.age}</p>
      </div>
     
    </div>
  );
};

export default eligibleVoter;
