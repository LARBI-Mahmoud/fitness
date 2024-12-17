import useStyles from './Login.style'; // Assuming your JSS styles are in styles.js
import { Form } from "@packages/components/Form";
import React from 'react';

const Login = () => {
  const classes = useStyles(); // Use the JSS styles
  const input = [{ type: "email", placeholder: "Email" }, { type: "password", placeholder: "Password" }]
  return (
    <div className={classes.formContainer}>
      <div className={classes.emojiAndTitle}>
        <span>
          💪 
        </span>
        <h1 className={classes.title}>  Coaches App  </h1>
        <span className={classes.emojiRight}>
          💪
        </span>
      </div>
      <Form input={input} buttonLabel="login" />
      <p className={classes.footer}>
        Don't have an account? <a href="/register">Sign up</a>
      </p>
    </div>
  );
};

export default Login;


