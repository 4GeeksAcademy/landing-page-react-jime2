import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark">
      <div className="container-fluid">
        <span className="spaced">
          <a className="navbar-brand text-light" href="#">Start Bootstrap</a>
          <button className="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon text-light"></span>
          </button>
        </span>
        <span className="spaced">
          <div className="collapse navbar-collapse text-light" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </span>
      </div>
    </nav>
  );
};



export default Navbar;