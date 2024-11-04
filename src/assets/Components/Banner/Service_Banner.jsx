// Banner.js
import React from 'react';
import styled from 'styled-components';
import Navbar from '../Header/Navbar'; // Import the Navbar component

// Styled components
const BannerContainer = styled.div`
  position: relative;
  margin-top: -7%;
  background-image: url('/images/rs3.jpg');
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
  padding: 20px;
  box-sizing: border-box;

  /* Dark overlay */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 1;
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
  font-family: "Playfair Display", serif;
  letter-spacing: 1px;
  margin-top: 10%;
  position: relative;
  z-index: 2;

  /* Responsive text styling */
  @media (max-width: 768px) {
    font-size: 2em;
    line-height: 2.5em;
  }
`;

const Banner = () => {
  return (
    <BannerContainer>
      <Navbar /> {/* Add the Navbar here */}
      <Heading>Services</Heading>
    </BannerContainer>
  );
};

export default Banner;
