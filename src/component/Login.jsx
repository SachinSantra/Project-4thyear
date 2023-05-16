import React, { useState } from "react";
// import Signup from "./Signup";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allEntry, setAllEntry] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();

    const newEntry = { email: email, password: password };

    setAllEntry([...allEntry, newEntry]);

  }
  return (
    <><div className="containerers">.
    
      <form action="" onSubmit={submitForm}>
        <h2>Login</h2>
        <div>
          <label htmlFor="email">Username</label>
          <input type="email" name="email" id="email" placeholder="Enter your Email" value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" placeholder="Enter your Password" value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
        <div className="signup">
          Don't have an accout? <a href="/signup">Signup now</a>

        </div>
      </form>
      </div>
    </>
  )
};

export default Login;


//package: vite 