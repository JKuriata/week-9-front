import { useState } from "react";

import { login } from "../../utils/fetch";

const Login = () => {
  return (
    <div>
      <h3>Login</h3>
      <form>
        <input placeholder="Username" />
        <input placeholder="Password" />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
