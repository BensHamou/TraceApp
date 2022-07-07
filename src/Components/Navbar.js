import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-free-solid";

const Navbar = () => {
  return (
    <div className="nav" id="navbar">
      <nav className="nav__container">
        <div>
          <a href="/" className="nav__link nav__logo">
            <FontAwesomeIcon
              icon="fas fa-leaf"
              style={{ color: "#eb8f34", marginRight: "1rem" }}
            />
            <span className="nav__logo-name">Archive for IMPROVEMENT</span>
          </a>
          <div className="nav__list">
            <div className="nav__items">
              <h3 className="nav__subtitle">MENU</h3>
              <div className="nav__dropdown">
                <a href="/" className="nav__link">
                  <FontAwesomeIcon
                    icon="fa-solid fa-database"
                    style={{ color: "#00A7E1", marginRight: "1rem" }}
                  />
                  <span className="nav__name">MetaDataset</span>
                </a>
              </div>
              <div className="nav__dropdown">
                <a href="/" className="nav__link">
                  <FontAwesomeIcon
                    icon="fas fa-cogs"
                    style={{ color: "#1dd3b0", marginRight: "1rem" }}
                  />
                  <span className="nav__name">MetaModel</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
