import React from "react";
import IntroBackground1 from "./IntroBackground1.jpg";
import "./BackgroundStyle.css"; // Import the CSS file
import IntroPage from './IntroPage.js';
// imported card-overlay code from bootstrap and inside this card we do not show text instead we show another card
// and also made the text to be appeared at center of page

function BackgroundStyle() {
  return (
    <div>
      <div className="card text-bg-dark">
        <img
          src={IntroBackground1}
          className="card-img opacity-25"
          alt="backgroun_image"
          style={{
            minHeight: "100vh",
            width: "100%",
            objectFit: "cover",
          }} /* style of image is set to fit each screen by scren height */
        />
        <div className="card-img-overlay">
          <IntroPage /> {/* another card */}
        </div>
      </div>
    </div>
  );
}

export default BackgroundStyle;
