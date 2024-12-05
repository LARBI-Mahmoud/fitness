import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  

  
  return (
    <div>
      <h2>Login Page</h2>
      <input
        type="text"
        placeholder="Username"
        value={"username"}
        onChange={() => {}}
      />
      <input
        type="password"
        placeholder="Password"
        value={"password"}
        onChange={() => {}}
      />
      <button onClick={()=>{}}>Login</button>
    </div>
  );
};

export default LoginPage;
