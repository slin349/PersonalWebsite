export const styles = {
    firstPageContainer: {
        height: '100vh',
        display: 'flex',
        backgroundColor: '#77C9D4',
        backgroundImage: 'linear-gradient(to right, #77C9D4, #57BC90)',
    },
    '@media (min-width: 1000px)': {
        firstPageContainer: {
            backgroundColor: 'white',
        },
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
    aboutMeCard: {
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '0.5rem',
        maxHeight: '25rem',
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
    pageThreeContainer: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
    },
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
    footerContainer: {
        display: 'flex',
        flexDirection: 'column',
        height: '5rem',
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerText: {
        fontSize: '0.8rem',
        color: 'white',
        marginTop: '0.5rem',
    },
}