import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    formContainer: {
        width: '400px',
        background: '#2e2e2e', // Dark gray
        borderRadius: '10px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)', // Heavier shadow
        padding: '30px',
        textAlign: 'center',
    },
    title: {
        margin: '0 0 20px',
        fontSize: '24px',
        color: '#ff4d4d', // Vibrant red for the title
        fontWeight: 'bold',
    },
    emojiAndTitle: {
        display: 'flex',
        flexDirection: 'row',
        justifySelf : 'center'
    },
    emojiRight: {
         transform: "scaleX(-1)"
    },
    footer: {
        marginTop: '15px',
        fontSize: '14px',
        color: '#ccc', // Light gray for contrast
        '& a': {
            color: '#ff4d4d',
            textDecoration: 'none',
            '&:hover': {
                textDecoration: 'underline',
            },
        },
    },
});

export default useStyles;
