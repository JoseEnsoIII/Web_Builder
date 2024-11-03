import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Modal from '../Modal/modal'; // Import the new Modal component

// Styled components for Navbar
const NavbarContainer = styled.nav`
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #525252;
  color: white;
  width: 100%;
  position: ${({ $isFixed }) => ($isFixed ? 'fixed' : 'absolute')};
  top: ${({ $isFixed }) => ($isFixed ? '0' : 'initial')};
  z-index: 1000;
  transition: top 0.3s;
`;

const SearchContainer = styled.div`
  flex: 1;
  display: flex;
  position: relative;
`;

const SearchInputWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  max-width: 300px;
  width: 100%;
  padding: 10px 10px 10px 40px;
  background-color: transparent;
  font-size: 16px;
  border: none; /* Removed underline */
  color: white;

  ::placeholder {
    color: white; /* Changed placeholder text color to white */
  }

  &:focus {
    outline: none;
    border-color: #ffcc00; /* Keep the focus outline color */
  }
`;

const Icon = styled.img`
  position: absolute;
  left: 10px;
  width: 20px;
  height: 20px;
`;

const AppointmentButton = styled.div`
  margin-right: 3%;
`;

const BookAppointmentButton = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #fff;
    color: #000;
  }
`;

// Navbar Component
const Navbar = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const navRef = useRef(null);
  const initialNavPosition = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (initialNavPosition.current === 0 && navRef.current) {
        initialNavPosition.current = navRef.current.getBoundingClientRect().top + window.scrollY;
      }

      if (currentScroll > scrollPosition) {
        if (currentScroll >= initialNavPosition.current) {
          setIsFixed(true);
        }
      } else {
        if (currentScroll < initialNavPosition.current) {
          setIsFixed(false);
        }
      }

      setScrollPosition(currentScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the form submission logic here (e.g., send data to the server)
    const formData = new FormData(event.target);
    console.log('Form Data:', Object.fromEntries(formData.entries()));

    // Close the modal after submission (optional)
    setIsModalOpen(false);
  };

  return (
    <>
      <NavbarContainer ref={navRef} $isFixed={isFixed}>
        <SearchContainer>
          <SearchInputWrapper>
            <Icon
              src="data:image/svg+xml;utf8,<svg viewBox='0 0 512 512' xml:space='preserve' xmlns='http://www.w3.org/2000/svg' enable-background='new 0 0 512 512'><path d='M344.5 298c15-23.6 23.8-51.6 23.8-81.7 0-84.1-68.1-152.3-152.1-152.3C132.1 64 64 132.2 64 216.3c0 84.1 68.1 152.3 152.1 152.3 30.5 0 58.9-9 82.7-24.4l6.9-4.8L414.3 448l33.7-34.3-108.5-108.6 5-7.1zm-43.1-166.8c22.7 22.7 35.2 52.9 35.2 85s-12.5 62.3-35.2 85c-22.7 22.7-52.9 35.2-85 35.2s-62.3-12.5-85-35.2c-22.7-22.7-35.2-52.9-35.2-85s12.5-62.3 35.2-85c22.7-22.7 52.9-35.2 85-35.2s62.3 12.5 85 35.2z' fill='%23ffffff' class='fill-000000'></path></svg>"
              alt="Search Icon"
            />
            <SearchInput type="text" placeholder="Search by Address or Area" />
          </SearchInputWrapper>
        </SearchContainer>
        <AppointmentButton>
          <BookAppointmentButton onClick={() => setIsModalOpen(true)}>BOOK AN APPOINTMENT</BookAppointmentButton>
        </AppointmentButton>
      </NavbarContainer>

      {/* Modal Component */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>Book an Appointment</h2>
        <p>Please fill in the details below.</p>

        <form onSubmit={handleSubmit}>
          <div>
            <input type="text" id="name" name="name" placeholder='Name' required />
          </div>

          <div>
            <input type="tel" id="phone" name="phone" placeholder='Number' required />
          </div>

          <div>
            <input type="email" id="email" name="email" placeholder='Email' required />
          </div>

          <div>
            <input type="text" id="address" name="address" placeholder='Address' required />
          </div>

          <div>
            <input type="text" id="details" name="details" placeholder='Details (Optional)' />
          </div>

          <button type="submit">Submit</button>
        </form>
      </Modal>
    </>
  );
};

export default Navbar;
