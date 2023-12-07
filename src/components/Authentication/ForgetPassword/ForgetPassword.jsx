import React, { useState } from "react";
import "../Login/login.scss";
import TextField from "../../common/TextField";
import { Link, useNavigate } from "react-router-dom";
import routes from "../../../config/routes";
import Button from "../../common/Button";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError("Enter your email.");
    } else if (
      !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    ) {
      setError("Invalid Email.");
    } else {
      setError("");

      const payload = {
        email: email,
      };
      navigate(routes?.auth?.createNewPassword);
      console.log({ payload });
    }
  };

  return (
    <section id="login-wrapper" className="screen-layout">
      <div className="form">
        <div class="frontSide">
          <h2 className="title">Forgot Password</h2>
          <p style={{ padding: "2rem 0" }}>
            Please enter your email address or mobile number to search for your
            account.
          </p>
          <label>Email *</label>
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
          />
          {error && <p className="error">{error}</p>}
          <div style={{ marginTop: "3rem" }}>
            <Button id="primary-button" onClick={handleSubmit}>
              Submit
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgetPassword;
