import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    '@global': {
        '*': {
            margin: 0,
            padding: 0,
            boxSizing: 'border-box',
        },
    },
    header: {
        maxHeight: '56px',
        backgroundColor: 'black',
        color: 'red',
        padding: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
        width: '100%',
    },
    logo: {
        '& h1': {
            fontSize: '28px',
            fontWeight: 'bold',
            background: 'linear-gradient(135deg, #0a19e7, #ff3c00)',
            color: 'transparent',
            WebkitBackgroundClip: 'text',
            margin: 0,
        },
    },
    nav: {
        display: 'flex',
        width: '100%',
    },
    navLinks: {
        listStyle: 'none',
        display: 'flex',
        margin: 0,
        padding: 0,
        width: '100%',
        '& li': {
            display: 'inline-block',
        },
        '& a': {
            textDecoration: 'none',
            color: 'white',
            fontSize: '16px',
            fontWeight: 500,
            padding: '10px',
            transition: 'color 0.3s',
            '&:hover': {
                color: 'red',
                borderBottom: '2px solid red',
            },
        },
    },
    centerIcons: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '50px', // Adjust the space between the icons
        flexGrow: 1, // Ensures it takes up available space
    },
    rightIcons: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: '5px'
    },
});

export default useStyles;
