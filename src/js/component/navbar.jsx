import React from "react";

const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="d-flex justify-content-between align-items-center w-100 m-1">
          {/* <span className="spaced"> */}
          <a className="navbar-brand text-light px-2" href="#">Start Bootstrap</a>
          <button className="navbar-toggler text-white " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon text-white"></span>
          </button>
          {/* </span> */}

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
    </div>
  );
};



export default Navbar;