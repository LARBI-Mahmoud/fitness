import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(135deg, #1a1a1a, #4d0000)', // Darker gradient with red and black
    },
    '@global': {
        body: {
            margin: 0,
            padding: 0,
        },
    },
       
       
    });
