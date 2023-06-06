import React, { useState } from "react";
import "./../navbar/Navbar.scss";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* <div className="header"> */}
        {/* <div className="logo">
      <p className="my-name">Yahya Naeem</p>
      <p className="proffesion">Web Developer</p>
    </div> */}
        <nav className="navbar navbar-expand-lg sticky-top">
          <div className="container-fluid">
            <a className="navbar-brand" href="@">
              <p className="my-name">Yahya Naeem</p>
              <p className="profession">Web Developer</p>
            </a>
            <button
              className="navbar-toggler ms-auto px-1"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <i className="fa-solid fa-xmark"></i>
              ) : (
                <i className="fa-solid fa-bars"></i>
              )}
              {/* <span className="navbar-toggler-icon"></span> */}
            </button>
            <div
              className={`collapse navbar-collapse ${open ? "show" : ""}`}
              id="navbarNav"
            >
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <HashLink
                    className="nav-link active"
                    aria-current="page"
                    to={"#home"}
                    onClick={() => setOpen(!open)}
                  >
                    Home
                  </HashLink>
                </li>
                <li className="nav-item">
                  <HashLink
                    className="nav-link active"
                    aria-current="page"
                    to={"#about"}
                    onClick={() => setOpen(!open)}
                  >
                    About
                  </HashLink>
                </li>
                <li className="nav-item">
                  <HashLink
                    className="nav-link"
                    smooth
                    to={"#services"}
                    onClick={() => setOpen(!open)}
                  >
                    Services
                  </HashLink>
                </li>
                <li className="nav-item">
                  <HashLink className="nav-link" smooth to={"#portfolio"}>
                    Portfolio
                  </HashLink>
                </li>
                <li className="nav-item">
                  <HashLink
                    className="nav-link"
                    smooth
                    to={"#contact"}
                    onClick={() => setOpen(!open)}
                  >
                    Contact
                  </HashLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      {/* </div> */}
    </>
  );
};

export default Navbar;
