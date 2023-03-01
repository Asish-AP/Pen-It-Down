import React from "react";
import { Link } from "react-router-dom";

const login = () => {
  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input required type="text" placeholder="username" />
        <input required type="email" placeholder="email" />
        <input required type="password" placeholder="password" />
        <button>Login</button>
        <p>This is an Error!</p>
        <span>
          Really! , You don't have an account yet
          <Link to="/register"> Register</Link>
        </span>
      </form>
    </div>
  );
};

export default login;
