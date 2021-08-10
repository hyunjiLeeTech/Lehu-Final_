import React from "react";

import Title from "../General/Title";
import "./Dashboard.css";

const Dashboard = (props) => {
  const { profile } = props;

  return (
    <div className="dashboardContainer mt-5">
      <div className="text-center">
        <Title title="Dashboard" color="black" />
      </div>
      <div className="row g-3 my-4 mx-4">
        <div className="col-md-6 ">
          <div className="control">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input
              type="text"
              value={profile.firstName}
              className="form-control"
              id="firstName"
              disabled
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
              value={profile.lastName}
              className="form-control"
              id="lastName"
              disabled
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
              className="form-select"
              value={profile.gender}
              disabled
            >
              <option defaultValue>Choose...</option>
              <option>Male</option>
              <option>Female</option>
              <option>Prefer not to say</option>
            </select>
          </div>
        </div>
        <div className="col-md-6">
          <div className="control">
            <label htmlFor="dateOfBirth" className="form-label">
              Date of Birth
            </label>
            <input
              type="text"
              className="form-control"
              id="dateOfBirth"
              placeholder="MM/DD/YYYY"
              value={profile.dob}
              disabled
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="control">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={profile.email}
              disabled
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
