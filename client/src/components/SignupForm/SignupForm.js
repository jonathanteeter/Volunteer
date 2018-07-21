import React from "react";
import "./SignupForm.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
const SignupForm = props => (
  <form className="form-horizontal">
    <div className="form-group">
      {/* <label htmlFor="firstname">First Name:</label> */}
      <input
        value={props.search}
        onChange={props.handleInputChange}
        name="firstname"
        type="text"
        className="form-control"
        placeholder="First Name"
        id="firstname"
      />

      {/* <label htmlFor="lastname">Last Name:</label> */}
      <input
        value={props.search}
        onChange={props.handleInputChange}
        name="lastname"
        type="text"
        className="form-control"
        placeholder="Last Name"
        id="lastname"
      />
      {/* <label htmlFor="firstname">Email:</label> */}
      <input
        value={props.search}
        onChange={props.handleInputChange}
        name="email"
        type="text"
        className="form-control"
        placeholder="Email"
        id="email"
      />
      {/* <label htmlFor="firstname">Phone:</label> */}
      <input
        value={props.search}
        onChange={props.handleInputChange}
        name="phone"
        type="text"
        className="form-control"
        placeholder="Phone"
        id="phone"
      />
      {/* <label htmlFor="firstname">City:</label> */}
      <input
        value={props.search}
        onChange={props.handleInputChange}
        name="city"
        type="text"
        className="form-control"
        placeholder="City"
        id="city"
      />
      <br />
      <button
        type="submit"
        onClick={props.handleFormSubmit}
        className="btn btn-success"
      >
        Sign Up
      </button>
    </div>
  </form>
);

export default SignupForm;
