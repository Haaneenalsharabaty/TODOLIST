import React from "react";
import "./NavBar.css";
import { NavLink, useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  const LogOut = () => {
    localStorage.setItem("logedin", "");

    navigate("/Intro");
  };

  return (
    <header>
      <nav className="nav-bar" id="nav-bar">
        {/* <div className="navlist" id="navlist"> */}
        <div className="navlist">
          <NavLink to="/intro">Home</NavLink>
        </div>
        {localStorage.getItem("logedin") && (
          <div className="navlist">
            <NavLink to="/ToDo">ToDOList</NavLink>
          </div>
        )}
        {localStorage.getItem("logedin") && (
          <NavLink to="/Tracker">
            <div className="navlist"> Expense Tracker</div>
          </NavLink>
        )}

        {localStorage.getItem("logedin") ? (
          <div className="logout" onClick={LogOut}>
            <i className="fas fa-sign-out-alt"></i>
          </div>
        ) : (
          <>
            <NavLink to="/SignUp">
              <div className="navlist"> Sign Up </div>
            </NavLink>
            <NavLink to="/SignIn">
              <div className="navlist"> Log In </div>
            </NavLink>
          </>
        )}
      </nav>
    </header>
  );
}

export default NavBar;
