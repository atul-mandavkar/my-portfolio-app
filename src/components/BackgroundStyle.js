import React from 'react';
import IntroBackground1 from './IntroBackground1.jpg';
import IntroPage from './IntroPage.js';

export default function BackgroundStyle() {
  return (
    <div
      className="myDiv"
      style={{
        backgroundImage: `url(${IntroBackground1})`,
        minWidth: "100vw",
        minHeight: "100vh",
      }}
    >
      <div
        className="overlay bg-dark bg-opacity-75"
        style={{ minWidth: "100vw", minHeight: "100vh" }}
      >
        <IntroPage />
      </div>
    </div>
  );
}
