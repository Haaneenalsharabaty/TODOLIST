import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";

function SignIn() {
  const navigate = useNavigate();

  const [formGroup, setFormGrroup] = useState({
    name: "",
    password: "",
  });

  const Change = (e) => {
    const { name, value } = e.target;
    setFormGrroup({ ...formGroup, [name]: value });
  };

  //   const [formGroup, setFormGroup] = useState({
  //     name: "",
  //     password: "",
  //   });
  //   const Change = (e) => {
  //     const { name, value } = e.target;
  //     setFormGroup({ ...formGroup, [name]: value });
  //   };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("haneen");
    let flag = true;
    let Userss = [];
    Userss = JSON.parse(localStorage.getItem("users"));
    for (let i = 0; i < Userss.length; i++) {
      if (
        formGroup.name === Userss[i].FullName &&
        formGroup.password === Userss[i].password
      ) {
        alert("Thank You ...You Can Go ");
        localStorage.setItem("logedin", JSON.stringify(formGroup));
        navigate("/ToDo");

        return (flag = false);
      }
    }
    if (flag === true) {
      alert("you Need to sign up ");
      navigate("/SignUp");
    }
  };

  return (
    <div className="form">
      <form className="login-form" onSubmit={onSubmit}>
        <h2>welcome {formGroup.name} </h2>
        <input
          type="text"
          id="login"
          className="login"
          name="name"
          value={formGroup.name}
          placeholder="login"
          required
          onChange={Change}
        />
        <input
          type="password"
          id="password"
          className="password"
          name="password"
          required
          value={formGroup.password}
          placeholder="password"
          onChange={Change}
        />
        <input type="submit" className="sumbit" value="Log In" />
      </form>
    </div>
  );
}

export default SignIn;
