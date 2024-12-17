import { Login } from "@packages/components/login";
import { useStyles } from "./LoginPage.style";
import { request } from '@packages/helpers/axios_helper';
import React, { useState, useEffect } from 'react';





const LoginPage = () => {
  const classes = useStyles();

  const [data, setData] = useState([]); // State to hold the data

  useEffect(() => {
    // Fetch data when the component mounts
    request("GET", "/message", {})
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // Empty dependency array ensures this runs only once


  return (
    <div className={classes.container}>
      <Login />
      <div>
        {data && data.map((line, index) => (
          <p key={index}>{line}</p> // Added a key for each item
        ))}
      </div>
    </div>
  );
};

export default LoginPage;
