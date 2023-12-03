import React from "react"
import "./SignUp.css"
export default function Login() {
    return (
      <>
        <main className="SignUp-main">
          <div className="container">
            <h1 className="welcome">Welcome to Not Pinterest</h1>
            <form id="create-form" aria-describedby="SignUp">
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
  
              <button type="submit" className="submit-button" >Sign Up</button>
            </form>
            <p>
             <a href="/login">Login</a>
            </p>
          </div>
        </main>
      </>
    );
  }
  