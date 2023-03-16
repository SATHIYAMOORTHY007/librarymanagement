import React from 'react'
import './login.css'
import { BrowserRouter, Link } from 'react-router-dom'
function Login() {
  return (
    <div className="login">
      <div className="lContainer">
        <input
          type="text"
          placeholder="username"
          id="username"
          className="lInput"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          className="lInput"
        />
        <Link className="lButton" to="/portal/home">
          Login
        </Link>
      </div>
    </div>
  )
}

export default Login
