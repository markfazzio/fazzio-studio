import React, { useState } from "react";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";

import github from "../img/github-icon.svg";
import logo from "../img/logo.svg";

const Navbar = () => {
  const location = useLocation();
  const [isActive, setIsActive] = useState(false);

  const toggleHamburger = () => {
    setIsActive(!isActive);
  };

  const navbarItemClassName = "navbar-item";
  const navbarItemActiveClassName = "is-active";
  const isAboutActive = location.pathname.includes("about");
  const isBlogActive = location.pathname.includes("blog");
  const isContactActive = location.pathname.includes("contact");
  const isHomeActive = location.pathname === "/";
  const isProjectsMenuActive = location.pathname.includes("js-algorithms");

  return (
    <nav
      className="navbar is-light"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link
            to="/"
            className={`${navbarItemClassName} ${
              isHomeActive ? navbarItemActiveClassName : ""
            }`}
            title="Fazzio Studio Logo"
          >
            <img src={logo} alt="Fazzio Studio Logo" />
          </Link>
          {/* Hamburger menu */}
          <div
            className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
            data-target="navMenu"
            role="menuitem"
            tabIndex={0}
            onKeyPress={() => toggleHamburger()}
            onClick={() => toggleHamburger()}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div
          id="navMenu"
          className={`navbar-menu ${isActive ? "is-active" : ""}`}
        >
          <div className="navbar-start has-text-centered">
            <div className="navbar-item has-dropdown is-hoverable">
              <div
                className={`navbar-link ${
                  isProjectsMenuActive ? "is-active" : ""
                }`}
              >
                Projects
              </div>

              <div className="navbar-dropdown">
                <Link
                  className={`${navbarItemClassName} ${
                    isProjectsMenuActive ? navbarItemActiveClassName : ""
                  }`}
                  to="/js-algorithms"
                >
                  Typescript Algorithms
                </Link>
                <a
                  className="navbar-item"
                  href="http://pixelpandas.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  PixelPandas LLC
                </a>
                <a
                  className="navbar-item"
                  href="http://poketcg.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  PokeTCG App
                </a>
              </div>
            </div>
            <Link
              className={`${navbarItemClassName} ${
                isAboutActive ? navbarItemActiveClassName : ""
              }`}
              to="/about"
            >
              About
            </Link>
            <Link
              className={`${navbarItemClassName} ${
                isBlogActive ? navbarItemActiveClassName : ""
              }`}
              to="/blog"
            >
              Blog
            </Link>
            <Link
              className={`${navbarItemClassName} ${
                isContactActive ? navbarItemActiveClassName : ""
              }`}
              to="/contact"
            >
              Contact
            </Link>
          </div>
          <div className="navbar-end has-text-centered">
            <a
              className="navbar-item"
              href="https://github.com/markfazzio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <img src={github} alt="Github" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
