import React from 'react';
import styled from 'styled-components';

// Styled components
const BannerContainer = styled.div`
  position: relative; /* Position relative to allow absolute positioning of the overlay */
  margin-top: -7%;
  background-image: url('/images/rs3.jpg');
  background-size: cover; 
  background-position: center; /* Center the image */
  width: 100%; /* Full width */
  height: 600px; /* Set a height for the banner */
  display: flex; /* Use flexbox for centering */
  flex-direction: column; /* Stack items vertically */
  justify-content: center; /* Center vertically */
  align-items: center; /* Center horizontally */
  color: white; /* Text color */
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8); /* Optional text shadow for readability */
  padding: 20px; /* Add some padding */
  box-sizing: border-box; /* Include padding in height/width */

  /* Dark overlay */
  &::after {
    content: '';
    position: absolute; /* Position overlay absolutely */
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3); /* Semi-transparent black overlay */
    z-index: 1; /* Ensure overlay is above the background */
  }
`;

const Heading = styled.h1`
  font-weight: 400;
  font-size: 80px;
  font-style: normal;
  color: #ffffff;
  line-height: 87.5px;
  text-decoration: none;
  transform: none;
  font-family: "Playfair Display", serif; /* Ensure to include a fallback font */
  letter-spacing: 1px;
  margin-top:10%;
  position: relative; /* Ensure heading appears above the overlay */
  z-index: 2; /* Ensure heading is above the overlay */

  /* Responsive text styling */
  @media (max-width: 768px) {
    font-size: 2em; /* Smaller font size on mobile */
    line-height: 2.5em; /* Adjust line height for smaller screens */
  }
`;

const Banner = () => {
  return (
    <BannerContainer>
      <Heading>Services</Heading>
    </BannerContainer>
  );
};

export default Banner;
