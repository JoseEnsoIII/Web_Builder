import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const App = () => {
  return (
    <Container>
      <Navbar isFixed={true} />
      {/* Other content can go here */}
    </Container>
  );
};

const Navbar = ({ isFixed }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const currentScrollTop = window.scrollY;

      setIsScrolled(currentScrollTop > 0);
      if (currentScrollTop > lastScrollTop && currentScrollTop > 400) {
        setIsVisible(false);
      } else if (currentScrollTop <= 200) {
        setIsVisible(true);
      }

      lastScrollTop = currentScrollTop;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Nav $isScrolled={isScrolled} $isVisible={isVisible} $isFixed={isFixed}>
      <Logo>Enso</Logo>
      <Hamburger onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </Hamburger>
      <NavLinks $isOpen={isOpen}>
        <li><a href="/">Meet the Team</a></li>
        <li><a href="/">Search for Homes</a></li>
        <li><a href="/">Our Communities</a></li>
        <li><a href="/">Home Valuation</a></li>
        <li><a href="/">Services</a></li>
        <li><a href="/">Homes Across America</a></li>
        <li><a href="/">Testimonials</a></li>
        <li><a href="/">Contact Us</a></li>
      </NavLinks>
    </Nav>
  );
};

const Banner = styled.div`
  background: url('banner-image.jpg') no-repeat center center/cover; /* Replace with your banner image */
  height: 300px; /* Adjust as needed */
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  position: relative;
  z-index: 1; /* Set lower z-index than Navbar */
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between; /* Distributes space between logo and hamburger */
  align-items: center;
  padding: 1rem 2rem;
  background-color: transparent; /* Default background color */
  transition: background-color 0.3s ease, transform 0.3s ease;
  color: #fff;
  height: 65px;
  position: ${({ $isFixed }) => ($isFixed ? 'fixed' : 'relative')};
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1001; /* Set higher z-index than Banner */
  transform: ${({ $isVisible }) => ($isVisible ? 'translateY(0)' : 'translateY(-100%)')};

  @media (max-width: 999px) {
    background-color: #000; /* Set the background color to black */
    padding: 1rem; /* Adjust padding for smaller screens */
    justify-content: space-between; /* Keep logo on left and hamburger on right */
  }
  
  @media (min-width: 1000px) {
    background-color: transparent; /* Keep transparent for larger screens */
  }
`;




const Logo = styled.div`
  margin-left: 5%; /* Margin for left alignment */
  font-size: 1.5rem;
  font-family: 'Georgia', serif;
  font-weight: bold;
  color: white;
`;

const NavLinks = styled.ul`
  display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')}; /* Show or hide based on state */
  flex-direction: column; /* Stack links vertically for mobile */
  gap: 0.3rem; /* Default spacing between links */
  list-style: none;
  margin: 0;
  padding: 0.5rem; /* Default padding */
  background-color: rgba(0, 0, 0, 0.8); /* Semi-transparent background */
  position: absolute; /* Position the menu absolutely */
  top: 65px; /* Position it below the navbar */
  left: 0;
  width: 100%; /* Full width */
  z-index: 1002; /* Above other content */
  justify-content: center; /* Center the links horizontally */
  align-items: center; /* Center the links vertically */
  height: auto; /* Auto height to fit content */

  @media (max-width: 480px) { /* For screens up to 480px */
    padding: 0.3rem; /* Reduced padding */
    gap: 0.2rem; /* Further decreased gap */
  }

 @media (max-width: 380px) { /* For screens up to 380px */
    padding: 0.2rem; /* Even smaller padding */
    gap: 0.1rem; /* Minimal gap for very small screens */
    font-size: 0.8rem; /* Smaller font size for better fit */
    margin-left:-10%;
  }

  @media (min-width: 481px) 
  margin-right:5%;
    flex-direction: column; /* Ensure vertical stacking */
    padding: 0.4rem; /* Slightly reduced padding for tablet view */
    gap: 0.2rem; /* Adjust gap for compactness */
    margin-left:-10%;
  }

  @media (min-width: 1000px) {
    display: flex; /* Show links in row on larger screens */
    flex-direction: row; /* Align links horizontally */
    position: static; /* Reset position on larger screens */
    padding: 0; /* Remove padding for larger screens */
    background-color: transparent; /* Reset background */
    height: auto; /* Reset height for larger screens */
  }

  li a {
    color: #e0e0e0;
    text-decoration: none;
    padding: 0.3rem 0.5rem; /* Adjusted padding to make links smaller */
    transition: background-color 0.3s; /* Transition for background change */
    
    &:hover {
      background-color: rgba(255, 255, 255, 0.1); /* Light background on hover */
    }
  }
`;


const Hamburger = styled.div`
  margin-right: 20%; /* Move the hamburger menu 5% to the left */
  display: flex;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 25px;
    background-color: #fff;
    margin: 4px 0;
    transition: all 0.3s ease;
  }

  /* Tablet styles */
  @media (max-width: 999px) {
    margin-right: 10%; /* Adjust margin for tablet view if necessary */
  }

  /* Mobile styles */
  @media (max-width: 768px) {
    margin-right: 15%; /* Further adjust margin for mobile view */
    display: flex; /* Ensure the hamburger menu is displayed on mobile */
  }
  @media (max-width: 480px) {
    margin-right: 23%; /* Adjust margin for larger mobile devices */
    span {
      width: 20px; /* Adjust width of spans for smaller screens */
      margin: 3px 0; /* Adjust margin between spans */
    }
  }

  /* Styles for small mobile devices */
  @media (max-width: 320px) {
    margin-right: 28%; /* Minimal margin for small devices */
    span {
      width: 18px; /* Further adjust width of spans */
      height: 1.5px; /* Adjust height for a sleeker look */
      margin: 2px 0; /* Adjust margin between spans */
    }
  }
  @media (min-width: 1000px) {
    display: none; /* Hide the hamburger menu on larger screens */
  }
`;


const Container = styled.div`
  position: relative; /* Ensure that Navbar and Banner stack correctly */
`;

export default App;
