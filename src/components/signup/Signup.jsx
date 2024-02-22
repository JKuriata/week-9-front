import { useState } from "react";

import { signup } from "../../utils/fetch";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeHander = (e, setter, state) => {
    setter(e.target.value);
    console.log(state);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Hello from handleSubmit");
    await signup(username, email, password);
  };
  return (
    <div>
      <h3>Signup</h3>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Username"
          onChange={(e) => changeHander(e, setUsername, username)}
        />
        <input
          placeholder="Email"
          onChange={(e) => changeHander(e, setEmail, email)}
        />
        <input
          placeholder="Password"
          onChange={(e) => changeHander(e, setPassword, password)}
        />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
