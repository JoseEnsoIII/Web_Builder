import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

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
      if (currentScrollTop > lastScrollTop && currentScrollTop > 300) {
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
      <Hamburger onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </Hamburger>
    </Nav>
  );
};

export default Navbar;

// Styled Components
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${({ $isScrolled }) => ($isScrolled ? '#000' : 'transparent')};
  transition: background-color 0.3s ease, transform 0.3s ease;
  color: #fff;
  height: 65px;
  position: ${({ $isFixed }) => ($isFixed ? 'fixed' : 'relative')};
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transform: ${({ $isVisible }) => ($isVisible ? 'translateY(0)' : 'translateY(-100%)')};
`;

const Logo = styled.div`
  margin-left: 5%;
  font-size: 1.5rem;
  font-family: 'Georgia', serif;
  font-weight: bold;
  color: white;
  span {
    font-family: 'Arial', sans-serif;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  transition: all 0.3s ease;
  margin-right: 8%;
  
  li a {
    color: #e0e0e0;
    text-decoration: none;
  }
`;

const Hamburger = styled.div`
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
`;
