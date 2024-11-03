import React from 'react';

const servicesData = [
    {
        image: 'https://res.cloudinary.com/luxuryp/images/w_1280,c_limit,f_auto,q_auto/ghtq7jtce7tsgdjtosrs/image-025',
        title: 'Decor Guidance',
        description: '',
    },
    {
        image: 'https://res.cloudinary.com/luxuryp/images/w_1280,c_limit,f_auto,q_auto/axx0whb7xfmlwhvcckrr/image-023',
        title: 'My Staging Expertise',
        description: '',
    },
    {
        image: 'https://res.cloudinary.com/luxuryp/images/w_1280,c_limit,f_auto,q_auto/tvntwvzwsjyi3ndwtpux/image-022',
        title: 'Intentional Layout',
        description: '',
    },
    {
        image: 'https://res.cloudinary.com/luxuryp/images/w_1280,c_limit,f_auto,q_auto/lpaq7euqjebackcuwsdu/image-024',
        title: 'Service Four',
        description: 'Description for service four.',
    },
];

const Services = () => {
    // Define the styles as JavaScript objects
    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            margin: '20px',
            padding: '5%',
        },
        sectionStyle: {
            textAlign: 'center',
            marginBottom: '40px', // Added margin for spacing
        },
        titleStyle: {
            fontSize: '43px',
            fontWeight: 400,
            fontFamily: '"Playfair Display", serif', // Ensure you have Playfair Display in your project
            color: '#000000',
            lineHeight: '47.3px',
            textDecoration: 'none',
            letterSpacing: '0',
            transform: 'none',
            marginBottom: '20px',
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
            margin: '10px 0', // Optional: add some margin to space h2 elements
        },
        h3Style: {
            fontSize: '30px',
            fontWeight: 400,
            fontFamily: '"Playfair Display", serif',
            color: '#000', // Updated color
            lineHeight: '33px',
            textDecoration: 'none',
            letterSpacing: '0',
            transform: 'none',
            margin: '10px 0', // Optional: add some margin to space h3 elements
        },
        pStyle: {
            fontSize: '16px',
            fontWeight: 'normal',
            fontFamily: 'Karla, sans-serif', // Ensure you have Karla in your project
            color: '#000000',
            lineHeight: '26.656px',
            textDecoration: 'none',
            letterSpacing: '0',
            transform: 'none',
            margin: '10px 0', // Optional: add some margin to space paragraphs
        },
        imagesStyle: {
            display: 'flex',
            flexWrap: 'wrap', // Allow images to wrap in smaller screens
            justifyContent: 'space-between', // Adjusted to space elements evenly
            alignItems: 'flex-start', // Align items at the start for better vertical alignment
            marginBottom: '20px', // Align with service items
        },
        imageContainerStyle: {
            display: 'flex',
            flexDirection: 'column', // Stack image and title vertically
            alignItems: 'center', // Center-align text under images
            margin: '0 10px', // Add some space between images
            flex: '1 0 21%', // Adjust the flex property for responsiveness
            maxWidth: '150px', // Set a max width for the images
        },
        imageStyle: {
            width: '100%', // Adjust width as needed
            height: 'auto', // Maintain aspect ratio
        },
        serviceItem: {
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px',
        },
        serviceImage: {
            flex: 1,
        },
        serviceImageImg: {
            width: '100%',
            height: 'auto',
        },
        serviceText: {
            flex: 1,
            padding: '0 20px',
        },
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.titleStyle}>Comprehensive Marketing Plan</h1>
            
            {/* Image Section */}
            <div style={styles.sectionStyle}>
                <div style={styles.imagesStyle}>
                    <div style={styles.imageContainerStyle}>
                        <img src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/rmtn3r5zpsljdsncbwa4/image-007" alt="Responsive" style={styles.imageStyle} />
                        <h2 style={styles.h2Style}>Responsive</h2>
                    </div>
                    <div style={styles.imageContainerStyle}>
                        <img src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/ks8ztlvw2b35q5qgs6xn/image-011" alt="Syndication" style={styles.imageStyle} />
                        <h2 style={styles.h2Style}>Syndication</h2>
                    </div>
                    <div style={styles.imageContainerStyle}>
                        <img src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/zr3bugldblvebixagfs1/image-009" alt="Virtual Tour" style={styles.imageStyle} />
                        <h2 style={styles.h2Style}>Virtual Tour</h2>
                    </div>
                    <div style={styles.imageContainerStyle}>
                        <img src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/dywgmsgzddtcsqxagbwh/image-013" alt="Photography" style={styles.imageStyle} />
                        <h2 style={styles.h2Style}>Photography</h2>
                    </div>
                </div>
            </div>

            {/* Services List */}
            {servicesData.map((service, index) => (
                <div
                    key={index}
                    style={{
                        ...styles.serviceItem,
                        flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                    }}
                >
                    <div style={styles.serviceImage}>
                        <img src={service.image} alt={service.title} style={styles.serviceImageImg} />
                    </div>
                    <div style={styles.serviceText}>
                    <h3 style={styles.h3Style}>{service.title}</h3>
                    <p style={styles.pStyle}>{service.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Services;
