
import React, { useState } from "react";
import "./header.scss";
import Button from "../../components/common/Button";
import { Link } from "react-router-dom";
import logo from '../../assets/logo/BP_Logo.png'


const Header = () => {

  return (
    <header>
      <nav className="navbar navbar-expand-lg" id="header-wrapper">
        <div className="container-fluid screen-layout">
          <a className="navbar-brand" href="/">
           <img src={logo} alt="" className="logo" />
          </a>
          <div
          >
            <div className="header-button">
              <Button>
                <Link
                    to=""
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Welcome
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>
   </header>
  );
};

export default Header;
