import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    button: {
        padding: '10px 15px',
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#fff',
        backgroundColor: '#ff4d4d', // Vibrant red button
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
        '&:hover': {
            backgroundColor: '#cc0000', // Darker red on hover
        },
    },
});

export default useStyles;
