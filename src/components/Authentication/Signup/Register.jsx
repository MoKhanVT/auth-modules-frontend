import React, { useState } from "react";
import TextField from "../../common/TextField";
import Button from "../../common/Button";
import { Link } from "react-router-dom";
import "../Login/login.scss";
import routes from "../../../config/routes";
import fb from "../../../assets/icons/facebook.png";
import google from "../../../assets/icons/google.png";
import twitter from "../../../assets/icons/twitter.png";

const Register = ({ handleToggle }) => {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (!values.firstname) {
      setErrors("Firstname is required.");
    } else if (
      /^(?=.*[0-9])/i.test(values.firstname) ||
      /^(?=.*[!@#$%^&*])/i.test(values.firstname)
    ) {
      setErrors("Firstname can not have numeric and special characters.");
    } else if (!values.lastname) {
      setErrors("Lastname is required.");
    } else if (
      /^(?=.*[0-9])/i.test(values.lastname) ||
      /^(?=.*[!@#$%^&*])/i.test(values.lastname)
    ) {
      setErrors("Lastname can not have numeric and special characters.");
    } else if (!values.email) {
      setErrors("Email is required.");
    } else if (
      !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        values.email
      )
    ) {
      setErrors("Invalid email address.");
    } else if (!values.password) {
      setErrors("Enter your password.");
    } else if (
      values.password.length < 8 ||
      !/[A-Z]/.test(values.password) ||
      !/[0-9]/.test(values.password)
    ) {
      setErrors(
        "Password must be at least 8 characters with 1 upper case letter and 1 number."
      );
    } else if (!values.confirmPassword) {
      setErrors("Enter confirm password.");
    } else if (values.confirmPassword !== values.password) {
      setErrors("Passwords do not match.");
    } else {
      setErrors("");
      const payload = {
        firstname: values.firstname,
        lastname: values.lastname,
        email: values.email,
        password: values.password,
      };

      console.log({ payload });
    }
  };

  return (
    <>
      <section id="login-wrapper" className="screen-layout">
        <div className="form">
          <div class="backSide">
            <section id="register">
              <h2 className="title">Sign Up</h2>
              <div className="row register-form">
                <div className="col-md-6">
                  <label>First Name *</label>
                  <TextField
                    name="firstname"
                    value={values.firstname}
                    onChange={handleChange}
                    placeholder="Enter your first name"
                  />
                </div>
                <div className="col-md-6">
                  <label>Last Name *</label>
                  <TextField
                    name="lastname"
                    value={values.lastname}
                    onChange={handleChange}
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <label>Email *</label>
              <TextField
                name="email"
                value={values.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
              <div className="row register-form pass ">
                <div className="col-md-6">
                  <label>Password *</label>
                  <TextField
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                  />
                </div>
                <div className="col-md-6 ">
                  <label>Confirm Password *</label>
                  <TextField
                    name="confirmPassword"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    placeholder="Re-enter your password"
                  />
                </div>
              </div>

              {errors && <p>{errors}</p>}
              <Button id="primary-button" onClick={handleRegister}>
                Sign Up
              </Button>
              <span className="do-not-account">
                I have an account?
                {/* <Link href={routes.auth.register}> Register</Link> */}
                <Link to={routes?.auth?.login}> Login</Link>
              </span>
              <hr />
              <small>or</small>
              <div className="social-links">
                <span>
                  <img src={google} alt="" />
                </span>
                <span>
                  <img src={fb} alt="" />
                </span>
                <span>
                  <img src={twitter} alt="" />
                </span>
              </div>
              <div className="term-policy">
                By creating an account you agree to{" "}
                <Link href=""> Terms of Use </Link>
                and <Link href=""> Privacy Policy</Link>.
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
