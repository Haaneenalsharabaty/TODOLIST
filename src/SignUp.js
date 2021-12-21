import React, { useState } from "react";
// import { Link } from "react-router-dom";// header component
import "./SignUp.css";
function SignUp(props) {
  const [formGroup, setFormGrroup] = useState({
    first: "",
    last: "",
    phone: "",
    password: "",
    confPassword: "",
  });

  const register = (e) => {
    const { name, value } = e.target;
    setFormGrroup({ ...formGroup, [name]: value });
  };

  const reg = (e) => {
    let users = {
      FullName: formGroup.first,
      password: formGroup.password,
      phone: formGroup.phone,
    };
    let arr = [];

    console.log(users);
    let flag = true;
    if (localStorage.length !== 0) {
      arr = JSON.parse(localStorage.getItem("users"));
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].FullName === formGroup.first) {
          alert("username is exist please go To login Page");
          return (flag = false);
        }
      }
      if (flag === true) {
        arr.push(users);
        localStorage.setItem("users", JSON.stringify(arr));
        alert("Done...Go to login Page");
      }
    } else {
      arr.push(users);
      localStorage.setItem("users", JSON.stringify(arr));
    }
  };

  return (
    <div id="container">
      <h1 id="regTitle"> Registration </h1>
      <div id="inputCont">
        <br />
        <form onSubmit={reg} id="formreg" action="/LogIn">
          <input
            value={formGroup.first}
            onChange={register}
            name="first"
            className="inputs"
            type={"text"}
            id="firstName"
            placeholder="  First Name"
            required
          ></input>
          <input
            name="last"
            value={formGroup.last}
            onChange={register}
            className="inputs"
            type={"text"}
            id="lastName"
            placeholder="  Last Name"
            required
          ></input>
          <br />
          <input
            name="password"
            value={formGroup.password}
            onChange={register}
            className="inputs"
            type={"password"}
            id="Password"
            placeholder="  Password"
            required
          ></input>
          <br />
          <input
            name="confPassword"
            value={formGroup.confPassword}
            onChange={register}
            className="inputs"
            type={"password"}
            id="confPassword"
            placeholder="  Repeat Password "
            required
          ></input>
          <br />
          <input
            name="phone"
            value={formGroup.phone}
            onChange={register}
            className="phonenumber"
            type={"text"}
            id="phoneNumber"
            placeholder="  Phone Number "
            required
          ></input>
          <br />

          {/* <Link to={'/Intro'}> */}
          <button className="regSubmit">Submit</button>
          {/* </Link> */}
        </form>
      </div>
    </div>
  );
}
export default SignUp;
