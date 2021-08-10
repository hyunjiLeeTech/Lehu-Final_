import { useState } from "react";
import { Link } from "react-router-dom";

import Title from "../General/Title";

import "./Button.css";
import "./Login.css";

const Login = ({ setPopupTitle, setPopupContent, togglePopup }) => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const submitForm = (e) => {
    e.preventDefault();

    fetch("https://lehu-final-backend.herokuapp.com/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(login),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.errCode === 0) {
          localStorage.setItem("lehuIdInfo", data.body[0].id);
          localStorage.setItem("lehuIsLogin", "true");
          setPopupTitle("Login");
          setPopupContent("Login Successfully done");
          togglePopup();
          window.location.pathname = "/dashboard";
        } else {
          setPopupTitle("Login Failed");
          setPopupContent(data.message);
          togglePopup();
        }
      })
      .catch((err) => {
        setPopupTitle("Login Failed");
        setPopupContent(err.message);
        togglePopup();
      });
  };

  return (
    <div className="loginContainer mt-5">
      <div className="mt-5 text-center">
        <Title title="Log In" color="black" />
        <p className="card-subtitle">
          You don't have an account?{" "}
          <Link to="/registration" className="card-link">
            Sign up
          </Link>
        </p>
      </div>
      <form action="/" method="POST" onSubmit={submitForm}>
        <div className="d-flex justify-content-center">
          <div className="col-8 mb-4 mt-3">
            <div className="control">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="form-control"
                value={login.email}
                onChange={(event) => {
                  setLogin({
                    ...login,
                    email: event.target.value,
                  });
                }}
              />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="col-8 mb-4">
            <div className="control">
              <label className="form-label" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="form-control"
                value={login.password}
                onChange={(event) => {
                  setLogin({
                    ...login,
                    password: event.target.value,
                  });
                }}
              />
            </div>
          </div>
        </div>
        <div className="mb-5 d-flex justify-content-center">
          <button type="submit" className="btn mb-4">
            Log In
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
