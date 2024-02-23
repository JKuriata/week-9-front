import { useState } from "react";

import { login } from "../../utils/fetch";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const changeHander = (e, setter, state) => {
    setter(e.target.value);
    console.log(state);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Hello from handleSubmit");
    await login(username, password);
  };
  return (
    <div>
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Username"
          onChange={(e) => changeHander(e, setUsername, username)}
        />
        <input
          placeholder="Password"
          onChange={(e) => changeHander(e, setPassword, password)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
