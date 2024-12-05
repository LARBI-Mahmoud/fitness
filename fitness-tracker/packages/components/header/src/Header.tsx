import { CalendarIcon, HomeIcon, LiveCoachingIcon, LogoutIcon, NotificationsIcon, ProfileIcon, ProgramsIcon, SearchIcon, SubscriptionPlansIcon, VideoIcon } from '@packages/assets/icons';
import useStyles from './Header.style'; // Assuming your JSS styles are in styles.js

const Header = () => {
  const classes = useStyles(); // Use the JSS styles

  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        <h1>FT</h1>
      </div>
      <nav className={classes.nav}>
        <ul className={classes.navLinks}>
          <div className={classes.centerIcons}>
            <li>
              <a href="#home">
                <HomeIcon />
              </a>
            </li>
            <li>
              <a href="#about">
                <VideoIcon />
              </a>
            </li>
            <li>
              <a href="#services">
                <CalendarIcon />
              </a>
            </li>
            <li>
              <a href="#contact">
                <LiveCoachingIcon />
              </a>
            </li>
          </div>

          <div className={classes.rightIcons}>
            <li>
              <a href="#contact">
                <SubscriptionPlansIcon />
              </a>
            </li>
            <li>
              <a href="#contact">
                <ProgramsIcon />
              </a>
            </li>
            <li>
              <a href="#contact">
                <SearchIcon />
              </a>
            </li>
            <li>
              <a href="#contact">
                <ProfileIcon />
              </a>
            </li>
            
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
