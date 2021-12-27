export const styles = {
    workCard: {
        display: 'flex',
        width: '50rem',
        height: '25rem',
        backgroundColor: 'rgba(1, 82, 73, 0.25)',
        borderRadius: '0.5rem',
        margin: '3rem 0rem',
    },
    workCardImageContainer: {
        width: '40%',
        margin: 'auto',
        textAlign: 'center',
    },
    workCardImage: {
        width: '15rem',
        height: '15rem',
    },
    workCardContent: {
        width: '60%',
        padding: '1rem 2.5rem',
        marginLeft: '1rem'
    },
    dividerStyle: {
        height: '20rem',
        margin: '2.5rem 0rem',
        borderRightWidth: '0.15rem',
        backgroundColor: 'white',
    },
    workCardTitle: {
        fontSize: '1.4rem',
        fontWeight: '600',
        marginTop: '2rem',
        color: '#323333',
        textShadow: '0.1rem 0.1rem 0rem white',
    },
    workCardRole: {
        fontSize: '1.2rem',
        fontWeight: '500',
        color: '#1CA2B2',
        margin: '0.2rem 0rem',
    },
    workCardLocation: {
        fontSize: '1rem',
        color: '#F6F6F6',
    },
    workCardDate: {
        fontSize: '1rem',
        color: '#F6F6F6',
        marginBottom: '1rem',
    },
    workCardDescription: {
        fontSize: '1.2rem',
        color: '#1B1B1B',
    },
    '@media (max-width: 838px)': {
        workCardImage: {
            width: '12rem',
            height: '12rem',
        },
        workCardDescription: {
            fontSize: '1rem',
        },
    },
    '@media (max-width: 500px)': {
        workCard: {
            height: '20rem',
        },
        workCardImage: {
            width: '8rem',
            height: '8rem',
        },
        workCardContent: {
            padding: '1rem 1.5rem',
        },
        workCardTitle: {
            fontSize: '1.1rem',
        },
        workCardRole: {
            fontSize: '0.9rem',
        },
        workCardLocation: {
            fontSize: '0.7rem',
        },
        workCardDate: {
            fontSize: '0.7rem',
        },
        workCardDescription: {
            fontSize: '0.7rem',
        },
        dividerStyle: {
            height: '15rem',
        }
    },
    '@media (max-width: 400px)': {
        workCard: {
            height: '28rem',
        },
        workCardImage: {
            width: '8rem',
            height: '8rem',
        },
        workCardContent: {
            padding: '1rem 1.25rem',
        },
        workCardTitle: {
            fontSize: '1.1rem',
        },
        workCardRole: {
            fontSize: '0.9rem',
        },
        workCardLocation: {
            fontSize: '0.8rem',
        },
        workCardDate: {
            fontSize: '0.8rem',
        },
        workCardDescription: {
            fontSize: '0.8rem',
        },
        dividerStyle: {
            height: '21rem',
        }
    },
    '@media (max-width: 330px)': {
        workCard: {
            height: '30rem',
        },
        workCardImage: {
            width: '6rem',
            height: '6rem',
        },
        workCardContent: {
            padding: '1rem 1.25rem',
        },
        workCardTitle: {
            fontSize: '1.1rem',
        },
        workCardRole: {
            fontSize: '0.9rem',
        },
        workCardLocation: {
            fontSize: '0.8rem',
        },
        workCardDate: {
            fontSize: '0.8rem',
        },
        workCardDescription: {
            fontSize: '0.8rem',
        },
        dividerStyle: {
            height: '25rem',
        }
    },
};