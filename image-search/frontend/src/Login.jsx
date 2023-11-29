import React from "react"
import "./login.css"
export default function Login() {
    return (
      <>
        <main className="login-main">
          <div className="container">
            <h1 className="welcome">Welcome to Not Pinterest</h1>
            <form id="create-form" aria-describedby="log-in">
              <label htmlFor="email">ENTER USERNAME:</label>
              <input
                type="text"
                name="username"
                placeholder="Enter Username"
                id="username"
                autoComplete="username"
                className="username"
              />
  
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                placeholder="Enter Password"
                id="password"
                name="password"
                required
                className="password"
              />
  
              <button type="submit" className="submit-button" >Login</button>
            </form>
            <p>
              Don't have an account? <a href="/login">Sign up</a>
            </p>
          </div>
        </main>
      </>
    );
  }
  