import React from "react";
 import "./Home.css";
import myPhoto from "./myPhoto.png";
import { Link } from "react-router-dom"; // imported Link from router dom
// a tag is replace by Link tag and href attribute of a is replace by to attribute

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
                <Link to="/HomeMain" className="btn btn-primary">
                  Let's Go
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
