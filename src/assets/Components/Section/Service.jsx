import React from 'react';
import ImageSection from './ImageSection'; // Adjust the path based on your file structure

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
        titleStyle: {
            fontSize: '43px',
            fontWeight: 400,
            fontFamily: '"Playfair Display", serif',
            color: '#000000',
            lineHeight: '47.3px',
            textDecoration: 'none',
            letterSpacing: '0',
            transform: 'none',
            marginBottom: '20px',
        },
        h3Style: {
            fontSize: '30px',
            fontWeight: 400,
            fontFamily: '"Playfair Display", serif',
            color: '#000',
            lineHeight: '33px',
            textDecoration: 'none',
            letterSpacing: '0',
            transform: 'none',
            margin: '10px 0',
        },
        pStyle: {
            fontSize: '16px',
            fontWeight: 'normal',
            fontFamily: 'Karla, sans-serif',
            color: '#000000',
            lineHeight: '26.656px',
            textDecoration: 'none',
            letterSpacing: '0',
            transform: 'none',
            margin: '10px 0',
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
            <ImageSection />

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
