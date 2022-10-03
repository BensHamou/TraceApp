import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-free-solid";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav" id="navbar">
      <nav className="nav__container">
        <div>
          <Link to="/" className="nav__link nav__logo">
            <FontAwesomeIcon
              icon="fas fa-leaf"
              style={{ color: "#eb8f34", marginRight: "1rem" }}
            />
            <span className="nav__logo-name">Archive for IMPROVEMENT</span>
          </Link>
          <div className="nav__list">
            <div className="nav__items">
              <h3 className="nav__subtitle">MENU</h3>
              <div className="nav__dropdown">
                <Link to="/dataset" className="nav__link">
                  <FontAwesomeIcon
                    icon="fa-solid fa-database"
                    style={{ color: "#00A7E1", marginRight: "1rem" }}
                  />
                  <span className="nav__name">MetaDataset</span>
                </Link>
              </div>
              <div className="nav__dropdown">
                <Link to="/model" className="nav__link">
                  <FontAwesomeIcon
                    icon="fas fa-cogs"
                    style={{ color: "#1dd3b0", marginRight: "1rem" }}
                  />
                  <span className="nav__name">MetaModel</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
