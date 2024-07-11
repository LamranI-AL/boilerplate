"use client";
import React from "react";
import "./css/loader.css";

function SpinnerLoader() {
  return (
    <section className="loader m-32">
      <div className="slider" style={{ "--i": 0 }}></div>
      <div className="slider" style={{ "--i": 1 }}></div>
      <div className="slider" style={{ "--i": 2 }}></div>
      <div className="slider" style={{ "--i": 3 }}></div>
      <div className="slider" style={{ "--i": 4 }}></div>
    </section>
  );
}

export default SpinnerLoader;
