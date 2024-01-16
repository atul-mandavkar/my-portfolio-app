import React from "react";
import "./Home.css";
import myPhoto from "./myPhoto.png";

function Home() {
  return (
    <div className="parent-container">
      <div className="blackScreen">
        <div className="card mb-3 bg-transparent text-light">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={myPhoto}
                className="img-fluid rounded-start"
                alt="myImage"
              />
            </div>
            <div className="col-md-8 d-flex align-items-center">
              <div className="card-body text-start">
                <h1 className="card-title text-uppercase">Card title</h1>
                <p className="card-text">
                  Creative Front End Developer proficient in crafting engaging
                  web experiences using HTML, CSS, JavaScript, and React.js for
                  dynamic and interactive user interfaces.
                </p>
                <p className="card-text">
                  <small className="fst-italic">
                    "Explore my portfolio for innovative web designs and
                    interactive user experiences."
                  </small>
                </p>
                <a href="/" className="btn btn-primary">
                  Let's Go
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
