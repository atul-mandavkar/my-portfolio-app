import React from "react";
import myPhoto from "./myPhoto.png";
import './IntroPage.css'

export default function IntroPage() {
  return (
    <div className="container introContainer">
      <img src={myPhoto} alt="my_image" width={250} />
      <div className="content text-light text-start lh-base">
        <h1 className="text-decoration-underline text-uppercase">I am web developer.</h1>
        <p className="fs-4">
          Creative Front End Developer proficient in crafting engaging web
          experiences using HTML, CSS, JavaScript, and React.js for dynamic and
          interactive user interfaces.
        </p>
        <p className="fst-italic fs-4">
          "Explore my portfolio for innovative web designs and interactive user
          experiences."
        </p>
        <button type="button" className="btn btn-primary btn-lg">
          Let's go...
        </button>
      </div>
    </div>
  );
}

