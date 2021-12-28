export const styles = {
    aboutMeCard: {
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '0.5rem',
        height: '25rem',
        width: '20rem',
        margin: '2rem',
        textAlign: 'center',
        alignItems: 'center',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
    },
    aboutMeIcon: {
        height: '3.5rem',
        fontSize: '2.5rem',
        margin: '1rem 0rem',
    },
    aboutMeTitleText: {
        fontSize: '1.5rem',
        width: '100%',
        height: '5rem',
        fontWeight: '600',
        marginBottom: '2.5rem',
        color: '#1CA2B2',
    },
    aboutMeDescription: {
        fontSize: '1rem',
        height: '12rem',
        margin: '0rem 3rem',
        color: '#323333',
    },
    '@media (max-width: 1200px)': {
        aboutMeCard: {
            height: '18rem',
        },
        aboutMeIcon: {
            fontSize: '2rem',
        },
        aboutMeTitleText: {
            fontSize: '1rem',
            height: '2rem',
        },
        aboutMeDescription: {
            fontSize: '0.8rem',
            margin: '0rem 1rem',
        },
    },
    '@media (max-width: 838px)': {
        aboutMeCard: {
            flexDirection: 'column',
        },
    },
    '@media (max-width: 330px)': {
        aboutMeCard: {
            width: '16rem',
        },
    },
};