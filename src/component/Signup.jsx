import React, { useState } from "react";


function Signup() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); 

  }

  return (
    <>
    <div className="containerers">  
    <form action=" " onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" placeholder="Enter your Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
      <label htmlFor="firstname">First Name:</label>
      <input type="text" id="firstname" name="firstname" placeholder="Enter your First Name" required value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      <label htmlFor="lastname">Last Name:</label>
      <input type="text" id="lastname" name="lastname" placeholder="Enter your Last Name" required value={lastName} onChange={(e) => setLastName(e.target.value)} />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" placeholder="Enter your Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">SignUp</button>
    </form>
    </div> 
    </>
  );
}

export default Signup;
