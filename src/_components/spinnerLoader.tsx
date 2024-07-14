"use client";
import React from "react";
import "./css/loader.css";

function SpinnerLoader() {
  return (
    <div className="newtons-cradle m-32">
      <div className="newtons-cradle__dot"></div>
      <div className="newtons-cradle__dot"></div>
      <div className="newtons-cradle__dot"></div>
      <div className="newtons-cradle__dot"></div>
    </div>
  );
}

export default SpinnerLoader;
