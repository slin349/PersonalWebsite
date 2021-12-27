export const styles = {
    firstPageContainer: {
        height: '100vh',
        backgroundColor: '#77C9D4',
        backgroundImage: 'linear-gradient(to right, #77C9D4, #57BC90)',
    },
    firstPageContentContainer: {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '50%',
        display: 'flex',
        justifyContent: 'center',
    },
    rightSideContentContainer: {
        width: '50%',
        paddingRight: '20rem',
    },
    //max-width is everything below
    //min-width is everything above
    '@media (max-width: 900px)': {
        firstPageContentContainer: {
            flexDirection: 'column',
        },
        image: {
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
        },
        rightSideContentContainer: {
            width: '100%',
            paddingRight: '0',
        },
        pageTwoContainer: {
            height: '100% !important',
        },
    },
    '@media (max-width: 1600px) and  (min-width: 900px)': {
        rightSideContentContainer: {
            paddingRight: '0',
        },
    },
    '@media (max-width: 400px)': {
        button: {
            fontSize: '0.8rem',
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
    iconContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '1rem',
    },
    icons: {
        fontSize: '2rem',
        margin: '0rem 0.3rem',
        color: '#015249',
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '0.5rem',
    },
    buttonLink: {
        margin: '0.5rem',
    },
    button: {
        display: 'flex',
        backgroundColor: '#015249',
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
        backgroundColor: 'white',
    },
    titleContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignContent: 'center',
    },
    title: {
        margin: '2rem auto 1rem auto',
        color: '#015249',
        fontWeight: '600',
        fontSize: '4rem',
    },
    divider: {
        color: 'black',
        margin: '0 auto',
        width: '10rem',
        borderBottomWidth: '0.2rem',
        backgroundColor: 'rgba(28, 162, 178, 0.3)',
    },
    contentContainer: {
        width: '100%',
        minHeight: '35rem',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        margin: '6rem auto',
    },
    pageThreeContainer: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
    },
    pageFourContainer: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        marginBottom: '5rem',
    },
    projectContentContainer: {
        width: '100%',
        padding: '0rem 10rem',
        minHeight: '35rem',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        margin: '3rem 0rem',
    },
    scrollButton: {
        position: 'fixed',
        width: '3rem',
        height: '3rem',
        zIndex: '1',
        bottom: '6rem',
        right: '3rem',
        borderRadius: '8rem',
        color: 'white',
        backgroundColor: '#015249',
        cursor: 'pointer',
        transition: 'background-color 0.25s ease',
        '&:hover': {
            backgroundColor: '#ED9121',
        },
    },
    footer: {
        width: '100%',
        backgroundColor: '#68C3B3',
    },
}