import useStyles from './Form.style'; // Assuming your JSS styles are in styles.js
import React from 'react';
import { Button } from "@packages/components/Button";
import { Input } from "@packages/components/Input";

type propsType = {
  input: {
    type: string;
    placeholder: string
  }[],
  buttonLabel : string
}

const Form = (props: propsType) => {
  const classes = useStyles(); // Use the JSS styles

  return (
    <form className={classes.form}>
      {
        props.input.map((i) =>
          <Input type={i.type} placeholder={i.placeholder} />
        )
      }
      <Button label={props.buttonLabel} />
    </form>
  );
};

export default Form;
