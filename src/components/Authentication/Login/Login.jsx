import React, { useState } from "react";
import { Link } from "react-router-dom";

import fb from "../../../assets/icons/facebook.png";
import google from "../../../assets/icons/google.png";
import twitter from "../../../assets/icons/twitter.png";

import TextField from "../../common/TextField";
import routes from "../../../config/routes";
import Button from "../../common/Button";

import "./login.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [toggleForm, setToggleForm] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email) {
      setError("Enter your email.");
    } else if (
      !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    ) {
      setError("Invalid Email.");
    } else if (!password) {
      setError("Enter your password.");
    } else if (
      password.length < 8 ||
      !/[A-Z]/.test(password) ||
      !/[0-9]/.test(password)
    ) {
      setError(
        "Password must be at least 8 characters with 1 upper case letter and 1 number."
      );
    } else {
      setError("");
      const payload = {
        email: email,
        password: password,
      };
      console.log({ payload });
    }
  };

  return (
    <section id="login-wrapper" className="screen-layout">
      <div className="form">
        <div class="frontSide">
          <h2 className="title">Login</h2>
          <label>Email *</label>
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
          />

          <label>Password *</label>
          <TextField
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={showPassword ? "Password" : "********"}
            type={showPassword ? "text" : "password"}
            icon={
              <i
                className={`passwordVisibilityReset fa ${showPassword ? "fa-eye icon_blk" : "fa-eye-slash icon_blk"
                  }`}
                onClick={() => setShowPassword(!showPassword)}
              />
            }
          />
          {error && <p className="error">{error}</p>}
          <Link className="forgot" to={routes?.auth?.forgetPassword}>
            Forgot Password?
          </Link>
          <Button id="primary-button" onClick={handleLogin}>
            Login
          </Button>
          <span className="do-not-account">
            Do not have an account?
            {/* <Link href={routes.auth.register}> Register</Link> */}
            <Link to={routes?.auth?.signup}> Register</Link>
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
        </div>
      </div>
    </section>
  );
};

export default Login;
