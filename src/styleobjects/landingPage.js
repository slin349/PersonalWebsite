export const styles = {
    pageOneContainer: {
        height: '100vh',
        backgroundColor: '#77C9D4',
        backgroundImage: 'linear-gradient(to right, #77C9D4, #57BC90)',
    },
    firstPageContentContainer: {
        display: 'flex',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '50%',
        display: 'flex',
        justifyContent: 'center',
        '& img': {
            width: '50%'
        },
    },
    rightSideContentContainer: {
        width: '50%',
        paddingRight: '20rem',
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
        textAlign: 'center',
    },
    title: {
        margin: '2rem 0rem 1rem 0rem',
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
    aboutMeContentContainer: {
        width: '100%',
        minHeight: '35rem',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        margin: '6rem auto',
    },
    workCardContentContainer: {
        width: '100%',
        minHeight: '35rem',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        margin: '6rem auto',
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
        width: '4rem',
        height: '4rem',
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
    //max-width is everything below
    //min-width is everything above
    '@media (max-width: 1600px) and  (min-width: 1300px)': {
        rightSideContentContainer: {
            paddingRight: '5rem',
        },
    },
    '@media (max-width: 1299px)': {
        rightSideContentContainer: {
            paddingRight: '5rem',
        },
        pageTwoContainer: {
            height: '100% !important',
        },
        pageThreeContainer: {
            height: '100% !important',
        },
        pageFourContainer: {
            height: '100% !important',
        },
        scrollButton: {
            height: '4rem',
            width: '4rem',
            bottom: '5rem',
        },
    },
    '@media (max-width: 900px)': {
        firstPageContentContainer: {
            flexDirection: 'column',
        },
        image: {
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            '& img': {
                width: '20%'
            },
        },
        rightSideContentContainer: {
            width: '100%',
            marginTop: '0.5rem',
            paddingRight: '0',
        },
        pageOneContainer: {
            height: '100% !important',
        },
        pageTwoContainer: {
            height: '100% !important',
        },
        pageThreeContainer: {
            height: '100% !important',
        },
        pageFourContainer: {
            height: '100% !important',
        },
        projectContentContainer: {
            flexDirection: 'column'
        },
        scrollButton: {
            right: '2rem',
            bottom: '2rem',
        },
    },
    '@media (max-width: 838px)': {
        aboutMeContentContainer: {
            flexDirection: 'column',
        },
        workCardContentContainer: {
            padding: '0rem 1.5rem',
        },
    },
    '@media (max-width: 500px)': {
        workCardContentContainer: {
            margin: '0rem',
        },
        scrollButton: {
            right: '2rem',
            bottom: '2rem',
        },
    },
    '@media (max-width: 400px)': {
        button: {
            fontSize: '0.8rem',
        },
        scrollButton: {
            right: '1rem',
            bottom: '1rem',
        },
    },
    '@media (min-width: 900px)': {
        projectContentContainer: {
            padding: '0rem',
        },
    },
    '@media (min-width: 1200px)': {
        projectContentContainer: {
            padding: '0rem 10rem',
        },
    },
    '@media (min-width: 1600px)': {
        projectContentContainer: {
            padding: '0rem 20rem',
        },
    },
    '@media (min-width: 2200px)': {
        projectContentContainer: {
            padding: '0rem 40rem',
        },
    },
}