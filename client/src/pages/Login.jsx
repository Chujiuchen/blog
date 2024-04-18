import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/authContext.jsx";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState(null);

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/");
    } catch (err) {
      setErrors(err.response.data);
    }
  };

  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input
          required
          type="text"
          placeholder="Username"
          name="username"
          onChange={handleChange}
        />
        <input
          required
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
        />
        <button type="submit" onClick={handleSubmit}>
          Login
        </button>
        {errors && <p>{errors}</p>}
        <span>
          Don't you have an account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
};
export default Login;
