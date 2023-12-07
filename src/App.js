import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./config/routes";
import Home from "./components/Home/Home";
import Login from "./components/Authentication/Login/Login";
import Register from "./components/Authentication/Signup/Register";
import HomeLayout from "./layout/HomeLayout/HomeLayout";
import ForgetPassword from "./components/Authentication/ForgetPassword/ForgetPassword";
import CreateNewPassword from "./components/Authentication/CreateNewPassword/CreateNewPassword";

const App = () => {
  //bring the routing setup here.
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path={routes.auth.login}
            element={
              <HomeLayout>
                <Login />
              </HomeLayout>
            }
          />
          <Route
            path={routes.auth.signup}
            element={
              <HomeLayout>
                <Register />
              </HomeLayout>
            }
          />
           <Route
            path={routes.auth.forgetPassword}
            element={
              <HomeLayout>
                <ForgetPassword />
              </HomeLayout>
            }
          />
           <Route
            path={routes.auth.createNewPassword}
            element={
              <HomeLayout>
                <CreateNewPassword/>
              </HomeLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
