import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export const Main = () => {
  return (
    <main className="hero">
      <div className="background-image" id="home"></div>
      <div className="hero-content">
        <h1>Ali Elsheikh</h1>
        <h2>Frontend Developer</h2>
        <p>KEEP WORKING ON IT</p>
      </div>
    </main>
  );
};