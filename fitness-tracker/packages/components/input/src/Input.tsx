import { CalendarIcon, HomeIcon, LiveCoachingIcon, LogoutIcon, NotificationsIcon, ProfileIcon, ProgramsIcon, SearchIcon, SubscriptionPlansIcon, VideoIcon } from '@packages/assets/icons';
import useStyles from './Input.style'; // Assuming your JSS styles are in styles.js
import React from 'react';

type propsType = {
  type: string;
  placeholder: string;
}

const Input = (props: propsType) => {
  const classes = useStyles(); // Use the JSS styles

  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      className={classes.input}
    />
  );
};

export default Input;
