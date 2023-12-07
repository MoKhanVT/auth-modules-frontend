import React, { useState } from "react";
import "../Login/login.scss";
import TextField from "../../common/TextField";
import { Link, useNavigate } from "react-router-dom";
import routes from "../../../config/routes";
import Button from "../../common/Button";

const CreateNewPassword = () => {
  const [values, setValues] = useState({
    password: "",
    confirmPassword: "",
  });
  const naviagte = useNavigate();

  const [errors, setErrors] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleCreateNewPassword = (e) => {
    e.preventDefault();

    if (!values.password) {
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
        password: values.password,
      };
      naviagte(routes?.auth?.login);
      console.log({ payload });
    }
  };

  return (
    <section id="login-wrapper" className="screen-layout">
      <div className="form">
        <div class="frontSide">
          <h2 className="title">Create New Password</h2>
          <label>Password *</label>
          <TextField
            name="password"
            value={values.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
          <label>Confirm Password *</label>
          <TextField
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
            placeholder="Re-enter your password"
          />

          {errors && <p className="error">{errors}</p>}
          <div style={{marginTop:"3rem"}}>
            <Button id="primary-button" onClick={handleCreateNewPassword}>
            Confirm
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateNewPassword;
