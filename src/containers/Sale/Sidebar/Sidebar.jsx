import React, { useState, useEffect } from "react";
import "./sidebar.scss";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo/logo-white.png";
import { AuthorPanelSidebarItems } from "../../../constants/AuthorPanelSidebarItems";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/slices/userAuthSlice";

const AuthorSideBar = () => {

  const dispatch = useDispatch();

  return (
    <>
      <aside className="side_bar">
        <div className="logo_blk">
          <img src={logo} alt="logo" />
        </div>
        <div className="inner">
          <ul>
            {AuthorPanelSidebarItems?.map((item) => {
              return (
                <li
                  className={
                    window.location.pathname.includes(item.route)
                      ? "active"
                      : ""
                  }
                  key={item.id}
                >
                  <i class={item.icon}></i>
                  <Link to={item.route}>{item.name}</Link>
                </li>
              );
            })}
          </ul>
          <div className="side-button-placement">
            <button type="button" className="sign_out" onClick={() => dispatch(logout())}>
              Sign out
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default AuthorSideBar;
