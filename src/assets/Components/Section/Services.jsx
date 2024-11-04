import React from "react";
import styled from "styled-components";

// Sample data for services
const servicesData = [
  {
    title: "Local Exposure",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "National Exposure",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
  {
    title: "International Exposure",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
];

// Styled components
const Section = styled.section`
  padding: 60px 20px;
  background: #fff;
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
`;

const Card = styled.div`
  background-color: #ffffff;
  padding: 40px;
  flex: 1 1 calc(33% - 30px); /* Default to 3 columns */
  max-width: calc(25% - 30px); /* Limit max width for larger screens */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: scale(1.05) rotate(1deg);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 999px) {
    flex: 1 1 calc(50% - 30px); /* 2 columns on tablet */
    max-width: calc(50% - 30px);
  }

  @media (max-width: 480px) {
    flex: 1 1 calc(50% - 30px); /* 2 columns on mobile */
    max-width: calc(50% - 30px);
  }
`;

const Icon = styled.div`
  font-size: 4em;
  color: #2980b9;
  margin-bottom: 15px;
`;

const Description = styled.p`
  color: #7f8c8d;
  font-size: 1em;
  line-height: 1.5;
`;

const Services = () => {
  return (
    <Section>
      <h1>We Market Your Home to The World</h1>
      <p
        style={{
          width: "80%", // Changed to a larger width for better readability on small screens
          maxWidth: "600px", // Set a max width to prevent it from being too wide
          margin: "0 auto", // This centers the paragraph horizontally
          textAlign: "center", // This centers the text inside the paragraph
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eaque quae
        similique in animi nulla consequuntur enim, sit repellat placeat,
        voluptatibus aliquam voluptas quidem,
      </p>
      <Container>
        {servicesData.map((service, index) => (
          <Card key={index}>
            <Icon>{service.icon}</Icon>
            <h2>{service.title}</h2>
            <Description>{service.description}</Description>
          </Card>
        ))}
      </Container>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        {/* SVG icons go here */}
      </div>
    </Section>
  );
};

export default Services;
