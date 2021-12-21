import React from "react";
import "./Intro.css";
import Weather from "./Weather";

function Intro() {
  return (
    <section className="Home" id="Home">
      <div className="text">
        <h1> Hello </h1>
        <h3>This is our To Do List </h3>
        <h3>&</h3>
        <h3>Expense Tracker Website</h3>
        <br />
        <h2>Sign in OR Register if you want to see the app</h2>
      </div>
      <Weather />
      {/* <div className="myimage">
        
                    <img src="5b68294a-db42-4b04-92f3-524e8f0c3ca2.jfif" alt="my pic" />
                </div> */}
    </section>
  );
}
export default Intro;
