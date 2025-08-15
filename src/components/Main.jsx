import React from "react";
import "./Main.css";

function Main() {
  return (
    <>
      <main>
        <h1 className="hand">👋🏽 Hello</h1>
        <div className="container">
          <div className="home-content">
            <p>
              Hi, Myself Harsh Note: this portfolio will be changes in few hours  
            </p>
          </div>
          <div className="home-img">
            <img src="harsh2.jpg" alt="logo" className="img-rounded" height={"50px"} />
          </div>
        </div>


        <h2 className="featured-posts">⭐ Featured Posts</h2>
        <p style={{color:"#fff"}}> Here’s a handpicked selection of my top articles from the past:</p>
        <ul>
          <li>
            <a href="#">
              <strong>Netflix Intro Page:</strong>
            </a>{" "}
            A sleek, interactive page inspired by Netflix's design.
          </li>
          <li>
            <a href="#">
              <strong>Smart Clock:</strong>
            </a>{" "}
            A modern, real-time clock with an elegant interface.
          </li>
          <li>
            <a href="#">
              <strong>QR Code Generator:</strong>
            </a>{" "}
            Easily generate and customize QR codes.
          </li>
          <li>
            <a href="#">
              <strong>Tic-Tac-Toe:</strong>
            </a>{" "}
            A classic game with an engaging, dynamic interface.
          </li>
        </ul>
      </main>
    </>
  );
}

export default Main;
