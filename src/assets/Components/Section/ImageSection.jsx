import React from 'react';

const imageData = [
    {
        src: 'https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/rmtn3r5zpsljdsncbwa4/image-007',
        title: 'Responsive',
    },
    {
        src: 'https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/ks8ztlvw2b35q5qgs6xn/image-011',
        title: 'Syndication',
    },
    {
        src: 'https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/zr3bugldblvebixagfs1/image-009',
        title: 'Virtual Tour',
    },
    {
        src: 'https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/dywgmsgzddtcsqxagbwh/image-013',
        title: 'Photography',
    },
    {
        src: 'https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/qljffx423kswkhh1oyc3/image-081',
        title: 'Drone Photography',
    },
];

const ImageSection = () => {
    const styles = {
        sectionStyle: {
            textAlign: 'center',
            marginBottom: '40px',
        },
        imagesStyle: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between', // For desktop
            alignItems: 'flex-start',
            marginBottom: '20px',
        },
        imageContainerStyle: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '0 10px',
            flex: '1 0 21%', // For desktop
            maxWidth: '150px',
        },
        imageStyle: {
            width: '100%',
            height: 'auto',
        },
        h2Style: {
            fontSize: '30px',
            fontWeight: 400,
            fontFamily: '"Playfair Display", serif',
            color: '#000000',
            lineHeight: '33px',
            textDecoration: 'none',
            letterSpacing: '0',
            transform: 'none',
            margin: '10px 0',
        },
        mobileImageContainerStyle: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '0 5px',
            flex: '1 0 45%', // For mobile (two images per row)
            maxWidth: '100%', // Adjust maxWidth for mobile
        },
        lastImageContainerStyle: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '0 auto', // Center last image
            flex: '1 0 100%', // Full width for the last image
            maxWidth: '200px',
        },
    };

    // Check for mobile or tablet screen size
    const isMobileOrTablet = window.innerWidth <= 768;

    return (
        <div style={styles.sectionStyle}>
            <div style={isMobileOrTablet ? { ...styles.imagesStyle, justifyContent: 'space-around' } : styles.imagesStyle}>
                {imageData.map((image, index) => {
                    // If it's the last image, use a different style
                    if (isMobileOrTablet && index === imageData.length - 1) {
                        return (
                            <div key={index} style={styles.lastImageContainerStyle}>
                                <img src={image.src} alt={image.title} style={styles.imageStyle} />
                                <h2 style={styles.h2Style}>{image.title}</h2>
                            </div>
                        );
                    }
                    return (
                        <div key={index} style={isMobileOrTablet ? styles.mobileImageContainerStyle : styles.imageContainerStyle}>
                            <img src={image.src} alt={image.title} style={styles.imageStyle} />
                            <h2 style={styles.h2Style}>{image.title}</h2>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ImageSection;
