import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    input: {
        padding: '10px',
        border: '1px solid #4d0000', // Dark red border
        borderRadius: '5px',
        fontSize: '16px',
        backgroundColor: '#1a1a1a', // Darker input background
        color: '#fff',
        outline: 'none',
        transition: 'border-color 0.3s',
        '&:focus': {
            borderColor: '#ff4d4d', // Vibrant red on focus
        },
    },
});

export default useStyles;
