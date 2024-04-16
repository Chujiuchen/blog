import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input required type="text" placeholder="Username" />
        <input requiredtype="password" placeholder="Password" />
        <button type="submit">Login</button>
        <p>This is a error!</p>
        <span>
          Don't you have an account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
};
export default Login;
