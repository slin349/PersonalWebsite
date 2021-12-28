export const styles = {
    projectCardContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '1rem',
    },
    projectCard: {
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        width: '18rem',
        height: '18rem',
        position: 'relative',
        opacity: '70%',
        '&:hover': {
            opacity: '100%',
            '& p': {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            },
        },
    },
    projectName: {
        position: 'absolute',
        top: '35%',
        width: '100%',
        textAlign: 'center',
        display: 'none',
        fontSize: '2rem',
        color: 'white',
        backgroundColor: '#499189',
        height: '5rem',
    },
    projectCardImage: {
        width: '100%',
        height: '100%',
    },
    '@media (max-width: 1200px)': {
        projectCardContainer: {
            width: '100%',
        },
    },
    '@media (max-width: 330px)': {
        projectCardContainer: {
            padding: '0rem',
        },
    },
};