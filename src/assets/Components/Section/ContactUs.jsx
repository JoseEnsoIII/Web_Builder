import React from 'react';
import styled from 'styled-components';

// Styled components
const BannerContainer = styled.div`
  position: relative; /* Position relative to allow absolute positioning of the overlay */
  background-image: url('/images/rs4.jpg');
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
    background-color: rgba(0, 0, 0, 0.6); /* Semi-transparent black overlay */
    z-index: 1; /* Ensure overlay is above the background */
  }

  /* Responsive text styling */
  @media (max-width: 768px) {
    h1 {
      font-size: 2em; /* Smaller font size on mobile */
    }

    p {
      font-size: 1.2em; /* Smaller font size on mobile */
    }
  }
`;

const BannerTitle = styled.h1`
  font-weight: 400;
  font-size: 43px;
  line-height: 55.9px;
  color: #ffffff;
  text-decoration: none;
  text-transform: none;
  font-family: "Playfair Display", serif; /* Ensure proper font family */
  letter-spacing: 1px;
  position: relative; /* Ensure title appears above the overlay */
  z-index: 2; /* Ensure title is above the overlay */
`;

const BannerText = styled.p`
  font-weight: 400;
  font-size: 16px;
  width: 50%;
  line-height: 25.6px;
  color: #ffffff;
  text-decoration: none;
  text-transform: none;
  font-family: "Karla", sans-serif; /* Use Karla font */
  letter-spacing: 1px;
  text-align: center; /* Optional: Center align text */
  position: relative; /* Ensure text appears above the overlay */
  z-index: 2; /* Ensure text is above the overlay */
`;

const BannerButton = styled.button`
  background-color: transparent;
  height:50px;
  color: white; /* Text color */
  border: 1px solid white;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 14px; /* Font size for button */
  font-weight: 700; /* Font weight for button */
  line-height: 14px; /* Line height for button */
  text-decoration: none;
  text-transform: uppercase; /* Uppercase text for button */
  font-family: "Karla", sans-serif; /* Use Karla font */
  letter-spacing: 1.5px; /* Letter spacing for button */
  margin-top: 20px; /* Space above the button */
  transition: background-color 0.3s;
  position: relative; /* Ensure button appears above the overlay */
  z-index: 2; /* Ensure button is above the overlay */

  &:hover {
    background-color: #fff; /* Darker shade on hover */
    color:black;
  }
`;

const Banner = () => {
  return (
    <BannerContainer>
      <BannerTitle>Work With Us</BannerTitle>
      <BannerText>
        With decades of experience in luxurious Tri Valley real estate, our team is here to ensure that your dreams are a reality. Let us guide you through your home buying journey, contact us today!
      </BannerText>
      <BannerButton>Contact Us</BannerButton>
    </BannerContainer>
  );
};

export default Banner;
