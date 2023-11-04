import React from 'react';
import IntroBackground1 from "./IntroBackground1.jpg";
import myPhoto from "./myPhoto.png";

export default function IntroPage() {
  return (
    <div className="card text-bg-dark">
      <img
        src={IntroBackground1}
        className="card-img"
        alt="Intro_Background_1"
        style={{ height: "100vh", opacity: 0.2 }}
      />
      <div className="card-img-overlay text-start container lh-lg">
        <img
          src={myPhoto}
          className="rounded float-start img-thumbnail"
          alt="my_photo"
          style={{ background: "transparent", borderColor: "transparent" }}
        />
        <div className="container pb-5">
          <h1 className="card-title fw-bold">Full Stack Developer</h1>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p className="card-text">
            <small>Last updated 3 mins ago</small>
          </p>
          <a href="/" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}
