import React from "react";

function Login() {
  return (
    <>
      <div class="login">
        <form id="login" method="get" action="login.php">
          <label>
            <b>User Name</b>
          </label>
          <input type="text" name="Uname" id="Uname" placeholder="Username" />
          <br />
          <label>
            <b>Password</b>
          </label>
          <input type="Password" name="Pass" id="Pass" placeholder="Password" />
          <br />
          <input type="button" name="log" id="log" value="Log In Here" />
          <br />
          <input type="checkbox" id="check" />
          <span>Remember me</span>
          <br /> Forgot <a href="#">Password</a>
        </form>
      </div>
    </>
  );
}

export default Login;
