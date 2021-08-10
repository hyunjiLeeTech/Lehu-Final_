import { NavLink } from "react-router-dom";

import "./Header.css";

const Header = () => {
  const logout = () => {
    localStorage.clear("lehuIsLogin");
    const path = window.location.pathname;
    window.location.pathname = path;
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid header">
        <NavLink className="navbar-brand" to="/">
          <img
            className="logo"
            src={`${process.env.PUBLIC_URL}/image/logo192.png`}
            alt="Lehu logo"
          />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink id="head-link" className="nav-link" to="/videos">
                Videos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink id="head-link" className="nav-link" to="/MovieList">
                Movie
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink id="head-link" className="nav-link" to="/ShowList">
                Show
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
            {localStorage.getItem("lehuIsLogin") === "true" ? (
              <li className="nav-item">
                <NavLink id="head-link" className="nav-link" to="/Dashboard">
                  Dashboard
                </NavLink>
              </li>
            ) : (
              <li className="nav-item">
                <NavLink id="head-link" className="nav-link" to="/login">
                  Log In
                </NavLink>
              </li>
            )}
            {localStorage.getItem("lehuIsLogin") === "true" ? (
              <li className="nav-item">
                <div
                  id="head-link"
                  className="nav-link logout"
                  onClick={logout}
                >
                  Logout
                </div>
              </li>
            ) : (
              <li className="nav-item">
                <NavLink id="head-link" className="nav-link" to="/registration">
                  Registration
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
