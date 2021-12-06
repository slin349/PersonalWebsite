export const styles = {
    pageContainer: {
        height: '100vh',
        display: 'flex',
        backgroundColor: '#77C9D4',
        backgroundImage: 'linear-gradient(to right, #77C9D4, #57BC90)',
    },
    firstPageContentContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        '& img': {
            width: '100%',
        },
    },
    nameText: {
        fontSize: '2.5rem',
        color: '#015249',
        fontWeight: '600',
        textAlign: 'center',
    },
    myNameText: {
        color: 'white',
    },
    welcomeText: {
        fontSize: '1.5rem',
        marginTop: '1rem',
        fontWeight: '500',
        color: '#015249',
        textAlign: 'center',
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '2rem',
    },
    button: {
        display: 'flex',
        backgroundColor: '#015249',
        margin: '1rem',
        borderRadius: '10rem',
        alignSelf: 'center',
        '&:hover': {
            backgroundColor: '#ED9121',
        },
    },
    pageTwoContainer: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#57BC90',
    },
    aboutMeTitleContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignContent: 'center',
    },
    aboutMeTitle: {
        margin: '2rem auto 1rem auto',
        color: 'white',
        fontWeight: '600',
        fontSize: '4rem',
    },
    divider: {
        color: 'black',
        margin: '0 auto',
        width: '10rem',
        borderBottomWidth: '0.2rem'
    },
    aboutMeTextContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginTop: '3rem',
    },
    aboutMeCard: {
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '0.5rem',
        height: '25rem',
        width: '20rem',
        margin: '2rem',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    aboutMeImage: {
        height: '8rem',
        width: '8rem',
    },
    aboutMeTitleText: {
        fontSize: '1.5rem',
        fontWeight: '600',
        height: '4rem',
    },
    aboutMeDescription: {
        fontSize: '1.2rem',
        width: '80%',
        textAlign: 'center',
    }
}