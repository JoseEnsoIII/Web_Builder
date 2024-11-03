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
  flex: 1 1 calc(33% - 30px); /* Adjusted for 3 columns */
  max-width: calc(25% - 30px); /* Limit max width for larger screens */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: scale(1.05) rotate(1deg);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    flex: 1 1 calc(50% - 30px); /* 2 columns on tablet */
    max-width: calc(50% - 30px);
  }

  @media (max-width: 480px) {
    flex: 1 1 100%; /* 1 column on mobile */
    max-width: 100%;
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
        <svg
          enableBackground="new 0 0 128 128"
          height="128px"
          version="1.1"
          viewBox="0 0 128 128"
          width="128px"
          xmlSpace="preserve"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          style={{ height: '55px', width: '55px' }}
        >
          <g id="Layer_2" />
          <g id="Layer_1">
            <g>
              <path d="M58,62H25c0,0,0-17.271,0-21.448s3.605-4.357,3.605-4.357L58,32.688V62z" fill="#FE6D4B" />
            </g>
            <g>
              <path d="M100,62H63V32.125l32.438-3.616c0,0,4.562-0.363,4.562,4.085S100,62,100,62z" fill="#9FD661" />
            </g>
            <g>
              <path d="M58,94.167l-29.394-3.563c0,0-3.606-0.062-3.606-4.167C25,81.875,25,67,25,67h33V94.167z" fill="#48C0EB" />
            </g>
            <g>
              <path d="M95.481,99.03L63,94.75V67h37c0,0,0,23.251,0,27.959S95.481,99.03,95.481,99.03z" fill="#FFCF47" />
            </g>
          </g>
        </svg>

        <svg width="50" height="50" viewBox="0 0 2048 2048" xmlns="http://www.w3.org/2000/svg">
          <path d="M1318.64 413.756c-14.426,44.2737 -37.767,85.3075 -65.8997,119.436l0 0.0625985c-28.3855,34.324 -66.3012,64.6713 -108.482,84.7926 -38.713,18.4665 -81.1489,28.4114 -123.377,25.1197l-12.9236 -1.00748 -1.70197 -12.8681c-5.48622,-41.4992 0.849213,-83.5099 14.1921,-122.387 15.5268,-45.241 40.6772,-86.5205 67.6642,-117.8l-0.00472441 -0.00472441c27.9272,-32.7142 65.3788,-61.1776 105.487,-81.8009 40.2437,-20.6941 83.465,-33.6343 122.803,-35.237l14.8701 -0.605906 1.62992 14.8559c4.76457,43.4481 -1.02992,86.8489 -14.2571,127.445z" fill="#424242"/>
          <path d="M1592.05 804.067c-14.2559,8.82048 -152.045,94.0808 -150.337,265.937 1.80236,207.182 177.474,279.003 187.171,282.966l0.0625985 0 0.419292 0.173622 13.7835 5.70709 -4.72087 14.1047c-0.279921,0.836221 0.0377953,-0.0531496 -0.370866,1.25906 -4.48229,14.361 -34.8685,111.708 -103.511,212.014 -31.1481,45.4985 -62.8831,90.9284 -100.352,125.971 -38.7957,36.2823 -83.1024,60.7737 -137.837,61.7906 -51.5894,0.968505 -85.3642,-13.6453 -120.474,-28.8366 -33.4784,-14.4862 -68.2949,-29.5524 -122.779,-29.5524 -57.2339,0 -93.1573,14.1923 -129.553,34.8121 -6.97078,2.86953 -12.1751,6.38349 -15.3893,10.5438 -0.27608,0.496111 -0.554778,1.02166 -0.774553,1.58063 -2.42516,5.86279 -4.04504,12.6374 -3.81565,19.3997 0.678953,14.4011 10.5546,26.8287 21.8995,36.0277 43.2084,33.2701 78.4688,67.6445 130.334,92.6745 55.4975,26.1813 128.018,38.1382 203.045,29.9426 36.0686,-4.56645 61.1592,-9.72679 91.8263,-25.971 35.6111,-18.7235 65.6331,-48.2725 100.294,-84.7922 44.4979,-45.5882 85.4423,-102.97 104.983,-141.077 15.9434,-31.4283 21.9719,-62.1829 22.2978,-90.4841 0.083356,-10.1301 -0.0315843,-19.2522 -0.200274,-28.3201 -0.0542771,-2.42068 1.55056,-29.7519 -9.78577,-38.6543 -7.72878,-6.66869 -19.1896,-8.24666 -29.7789,-8.54641 -5.48583,-0.13217 -11.0745,0.29583 -16.7395,1.72814z" fill="#CDDC39"/>
        </svg>
      </div>
    </Section>
  );
};

export default Services;
