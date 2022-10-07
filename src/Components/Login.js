import React from "react";
import { useNavigate } from "react-router";

function Login() {
  const navigate = useNavigate();
  return (
    <>
      <div className="parent-container">
        <div class="login-container">
          <div class="item-container">
            <h2 class="log-in">Log in</h2>
          </div>
          <form>
            <div class="form-input">
              <label for="email" class="label">
                Email
              </label>
              <input type="text" />
            </div>
            <div class="form-input">
              <label for="password" class="label">
                Password
              </label>
              <input type="password" />
            </div>
            <div class="display-space-between">
              <div>
                <input type="checkbox" checked />
                <label for="password" class="chekbox-label">
                  Remember Me
                </label>
              </div>
              <div>
                <a href="#">Forget password</a>
              </div>
            </div>
            <div>
              <button onClick={() => navigate("/Dashboard")} type="submit">
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
