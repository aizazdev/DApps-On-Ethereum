import React, { Fragment } from "react";
import { Link } from "react-scroll";

const Navbar = ({ home }) => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src="images/logo-epic15x.png" alt="" />
      </div>
      <ul>
        {home && (
          <Fragment>
            <li>
              <Link
                to="overview"
                spy={true}
                smooth={true}
                duration={600}
                // href="#overview"
              >
                Overview
              </Link>
            </li>
            <li>
              <Link to="roadmap" spy={true} smooth={true} duration={600}>
                Roadmap
              </Link>
              {/* <a href="#roadmap"></a> */}
            </li>
            <li>
              <Link to="about" spy={true} smooth={true} duration={600}>
                About
              </Link>
            </li>
          </Fragment>
        )}
        <li>
          <a href="#rere">
            <img src="images/flaticon1503093541-svg.svg" alt="" />
          </a>
        </li>

        <li>
          <a href="#rere">
            <img src="images/flaticon1503093541-svg.svg" alt="" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
