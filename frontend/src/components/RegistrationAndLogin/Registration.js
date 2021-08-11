import { useState } from "react";
import { Link } from "react-router-dom";

import Title from "../General/Title";

import "./Registration.css";
import "./Button.css";

const Registration = ({ setPopupTitle, setPopupContent, togglePopup }) => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "",
    dob: "",
  });
  const [confirmPwd, setConfirmPwd] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    const dobSplit = user.dob.split("/");

    if (user.password !== confirmPwd) {
      setPopupTitle("Registration Failed");
      setPopupContent("Password and confirmed password doesn't match");
      togglePopup();
    } else if (dobSplit.length !== 3) {
      setPopupTitle("Registration Failed");
      setPopupContent("Please match date of birth format");
      togglePopup();
    } else if (1901 > Number(dobSplit[2]) || Number(dobSplit[2]) > 2099) {
      setPopupTitle("Registration Failed");
      setPopupContent("Please right correct year. 1901-2099 allow to enter");
      togglePopup();
    } else if (dobSplit[0].length !== 2 || dobSplit[1].length !== 2) {
      setPopupTitle("Registration Failed");
      setPopupContent(
        "Please right correct day or month format following the placeholder. For example, 1/1/2012 should be 01/01/2012"
      );
      togglePopup();
    } else {
      fetch("https://lehu-final-backend.herokuapp.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.errCode === 0) {
            setPopupTitle("Registration Success");
            setPopupContent(`Welcome! Your account is successfully added!`);
            togglePopup();
          } else {
            setPopupTitle("Registration Failed");
            setPopupContent(data.message);
            togglePopup();
          }
        })
        .catch((err) => {
          setPopupTitle("Registration Failed");
          setPopupContent(err.message);
          togglePopup();
        });
    }
  };

  return (
    <div className="registrationContainer mt-5">
      <div className="text-center">
        <Title title="Registration" color="black" />
        <p className="card-subtitle">
          Already have an account?{" "}
          <Link to="/login" className="card-link">
            Login
          </Link>
        </p>
      </div>
      <form
        className="row g-3 my-4 mx-4"
        action="/"
        method="POST"
        onSubmit={submitForm}
      >
        <div className="col-md-6 ">
          <div className="control">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              className="form-control"
              id="firstName"
              value={user.firstName}
              onChange={(event) => {
                setUser({
                  ...user,
                  firstName: event.target.value,
                });
              }}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="control">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              className="form-control"
              id="lastName"
              value={user.lastName}
              onChange={(event) => {
                setUser({
                  ...user,
                  lastName: event.target.value,
                });
              }}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="control">
            <label htmlFor="gender" className="form-label">
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              className="form-select"
              value={user.gender}
              onChange={(event) => {
                setUser({
                  ...user,
                  gender: event.target.value,
                });
              }}
            >
              <option value="">Choose...</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Prefer not to say">Prefer not to say</option>
            </select>
          </div>
        </div>
        <div className="col-md-6">
          <div className="control">
            <label htmlFor="dob" className="form-label">
              Date of Birth
            </label>
            <input
              type="text"
              className="form-control"
              id="dob"
              name="dob"
              value={user.dob}
              placeholder="DD/MM/YYYY"
              onChange={(event) => {
                setUser({
                  ...user,
                  dob: event.target.value,
                });
              }}
            />
          </div>
        </div>
        <div className="col-12">
          <div className="control">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={user.email}
              onChange={(event) => {
                setUser({
                  ...user,
                  email: event.target.value,
                });
              }}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="control">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={user.password}
              onChange={(event) => {
                setUser({
                  ...user,
                  password: event.target.value,
                });
              }}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="control">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPwd}
              onChange={(event) => {
                setConfirmPwd(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="mb-5 d-flex justify-content-center">
          <button type="submit" className="btn mb-4">
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Registration;
