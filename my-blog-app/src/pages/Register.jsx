import React from "react";
import { Link } from "react-router-dom";

const register = () => {
  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input required type="text" placeholder="username" />
        <input required type="email" placeholder="email" />
        <input required type="password" placeholder="password" />
        <button>Register</button>
        <p>This is an Error!</p>
        <span>
          Do You have an account
          <Link to="/register"> Register</Link>
        </span>
      </form>
    </div>
  );
};

export default register;
