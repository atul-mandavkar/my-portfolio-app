import React from "react";
import myPhoto from "./myPhoto.png";
// here we imported horizontal card from bootstrap to show image and text side by side. only text-color is changed.

function IntroPage() {
  return (
    <div>
      <div className="card bg-transparent text-light">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={myPhoto}
              className="img-fluid rounded-start"
              alt="my_image"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h1 className="card-title text-uppercase">I am web developer</h1>
              <p className="card-text fs-5">
                Creative Front End Developer proficient in crafting engaging web
                experiences using HTML, CSS, JavaScript, and React.js for
                dynamic and interactive user interfaces.
              </p>
              <p className="card-text fs-6">
                <strong className="text-body-light fst-italic">
                  "Explore my portfolio for innovative web designs and
                  interactive user experiences."
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroPage;
