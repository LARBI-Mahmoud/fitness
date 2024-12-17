import useStyles from './Button.style'; // Assuming your JSS styles are in styles.js
import React from 'react';

type propsType = {
  label : string ;
}

const Button = (props: propsType) => {
  const classes = useStyles(); // Use the JSS styles

  return (
<button type="submit" className={classes.button}>
            {props.label}
          </button>
  );
};

export default Button;
