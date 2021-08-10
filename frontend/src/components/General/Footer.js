import { NavLink } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  return (
    <div id="footerContainer">
      <footer className="footer mt-auto py-3 text-white">
        <div className="container">
          <div className="row">
            <div className="col-3 col-lg">
              <NavLink
                id="head-link"
                className="nav-link footer-item"
                to="/videos"
              >
                Videos
              </NavLink>
            </div>
            <div className="col-3 col-lg">
              <NavLink
                id="head-link"
                className="nav-link footer-item"
                to="/movielist"
              >
                Movies
              </NavLink>
            </div>
            <div className="col-3 col-lg">
              <NavLink
                id="head-link"
                className="nav-link footer-item"
                to="/showlist"
              >
                Shows
              </NavLink>
            </div>
            <div className="col-3 col-lg">
              <a
                className="nav-link footer-item"
                id="head-link"
                href="https://github.com/hyunjiLeeTech/Lehu"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
