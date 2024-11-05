import React, { useState } from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  height: 100%;
  padding: 20px 10px;
  background-color: #fff;
  font-size: 14px;

  display: flex;
  flex-direction: row; /* Default to row */
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  flex-wrap: wrap; /* Allow wrapping for responsiveness */

  @media (max-width: 768px) {
    flex-direction: column; /* Stack items vertically */
    align-items: center; /* Center items horizontally */
  }
`;
const SubscribeButton = styled.button`
  background-color: #000;
  color: #fff;
  padding: 10px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #444; // Darker shade on hover
  }
`;

const TextBlock = styled.div`
  margin: 0 15px;
  text-align: left;
  color: black;
  width: 30%; /* Adjusted width for better responsiveness */

  @media (max-width: 768px) {
    width: 100%; /* Full width on mobile */
    text-align: center; /* Center text on mobile */
  }
`;

const Footer = () => {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (agreed && email) {
      setFeedbackMessage(`Subscribed with email: ${email}`);
      // Reset email and agreed state if needed
      setEmail("");
      setAgreed(false);
    } else {
      setFeedbackMessage(
        "Please agree to the privacy policy and enter a valid email."
      );
    }
  };

  return (
    <FooterContainer>
      <TextBlock>
        <h1 style={{ color: "black" }}>Web Builder</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <h2>Address:</h2>
        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <p
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              style={{
                enableBackground: "new 0 0 24 24",
                verticalAlign: "middle",
                marginRight: "5px",
              }}
              version="1.1"
              viewBox="0 0 24 24"
              width="15"
              height="15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="info" />
              <g id="icons">
                <path
                  d="M12,0C7,0,3,4,3,9c0,6.2,3.4,11.7,8.5,14.9c0.3,0.2,0.7,0.2,1.1,0C17.6,20.6,21,15.2,21,9C21,4,17,0,12,0z M12,13 c-2.2,0-4-1.8-4-4c0-2.2,1.8-4,4-4s4,1.8,4,4C16,11.2,14.2,13,12,13z"
                  id="pin"
                />
              </g>
            </svg>
            4733 Chabot Drive #100 Pleasanton, CA 94588
          </p>
        </div>

        <h2>Contact Information:</h2>
        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <p
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              fill="none"
              stroke="#000000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="15"
              height="15"
              style={{ verticalAlign: "middle", marginRight: "5px" }}
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h 3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            (925) 553-6707 |
            <svg
              height="15"
              viewBox="0 0 72 72"
              width="15"
              xmlns="http://www.w3.org/2000/svg"
              style={{ verticalAlign: "middle", margin: "0 5px" }} // Adjusted margin for better spacing
            >
              <g fill="none" fillRule="evenodd">
                <path
                  d="M36,72 L36,72 C55.882251,72 72,55.882251 72,36 L72,36 C72,16.117749 55.882251,-3.65231026e-15 36,0 L36,0 C16.117749,3.65231026e-15 -2.4348735e-15,16.117749 0,36 L0,36 C2.4348735e-15,55.882251 16.117749,72 36,72 Z"
                  fill="#000"
                />
                <path
                  d="M18,26.1623226 L18,46.5476129 C18,47.6566452 18.8117419,48.5554839 19.9300645,48.5554839 L51.7447742,48.5554839 C52.8619355,48.5554839 53.6748387,47.6461935 53.6748387,46.5476129 L53.6748387,26.1623226 C53.6748387,24.9452903 52.947871,24 51.7447742,24 L19.9300645,24 C18.6805161,24 18,24.9685161 18,26.1623226 M20.9334194,27.9379355 C20.9334194,27.4467097 21.2307097,27.1656774 21.7056774,27.1656774 C21.9994839,27.1656774 33.560129,34.4910968 34.2603871,34.9207742 L36.0696774,36.0460645 C36.6433548,35.6616774 37.2193548,35.3330323 37.8139355,34.9347097 C39.0274839,34.1589677 49.8251613,27.1656774 50.1224516,27.1656774 C50.5985806,27.1656774 50.8947097,27.4467097 50.8947097,27.9379355 C50.8947097,28.4581935 49.8925161,28.9749677 49.239871,29.3732903 C45.1393548,31.8723871 41.04,34.5967742 36.980129,37.1887742 C36.7432258,37.3490323 36.2845161,37.6916129 35.9407742,37.6393548 C35.5575484,37.580129 23.7936774,30.0224516 21.6534194,28.7636129 C21.3317419,28.5743226 20.9334194,28.4012903 20.9334194,27.9379355"
                  fill="#FFF"
                />
              </g>
            </svg>
            luxuryhomesinwc@icloud.com
          </p>
        </div>
      </TextBlock>

      <TextBlock>
        <h1 style={{ color: "black" }}>Newsletter</h1>
        <p>
          Subscribe to our Newsletter for latest news and updates. Stay tuned!{" "}
        </p>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            required
            style={{
              padding: "10px",
              width: "100%",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          <label>
            <input
              type="checkbox"
              checked={agreed}
              onChange={() => setAgreed(!agreed)}
              required
            />
            By providing your contact information, you agree to our{" "}
            <span
              style={{
                textDecoration: "underline",
                color: "#000",
                cursor: "pointer",
              }}
            >
              Privacy Policy ,
            </span>
            <span
              style={{
                textDecoration: "underline",
                color: "#000",
                cursor: "pointer",
              }}
            >
              Terms of Service
            </span>{" "}
            and consent to receive marketing communications.
          </label>
          <button
            type="submit"
            style={{
              backgroundColor: "#000",
              color: "#fff",
              padding: "10px",
            }}
          >
            Subscribe
          </button>
        </form>
        <h2>Follow Us</h2>
        <svg
          height="30px"
          width="30px"
          style={{
            fillRule: "evenodd",
            clipRule: "evenodd",
            strokeLinejoin: "round",
            strokeMiterlimit: 2,
            verticalAlign: "middle",
            marginRight: "5px",
          }}
          version="1.1"
          viewBox="0 0 512 512"
          xmlSpace="preserve"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M512,257.555c0,-141.385 -114.615,-256 -256,-256c-141.385,0 -256,114.615 -256,256c0,127.777 93.616,233.685 216,252.89l0,-178.89l-65,0l0,-74l65,0l0,-56.4c0,-64.16 38.219,-99.6 96.695,-99.6c28.009,0 57.305,5 57.305,5l0,63l-32.281,0c-31.801,0 -41.719,19.733 -41.719,39.978l0,48.022l71,0l-11.35,74l-59.65,0l0,178.89c122.385,-19.205 216,-125.113 216,-252.89Z"
            style={{ fillRule: "nonzero" }}
          />
        </svg>
        <a href="https://www.facebook.com">
          <svg
            viewBox="0 0 32 32"
            width="30px"
            height="30px"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              verticalAlign: "middle",
              marginRight: "5px",
            }}
          >
            <g
              data-name="ig instagram insta photo"
              id="ig_instagram_insta_photo"
            >
              <path d="M20.45,13.32a1,1,0,0,0-.57,1.3,4,4,0,1,1-2.31-2.3,1,1,0,1,0,.71-1.87,6,6,0,0,0-6.37,9.85,6,6,0,0,0,8.48,0,6,6,0,0,0,1.36-6.41A1,1,0,0,0,20.45,13.32Z" />
              <circle cx="23" cy="9" r="1" />
              <path d="M28,9a5,5,0,0,0-4.9-5h0A77.11,77.11,0,0,0,9,4,5,5,0,0,0,4,8.92,91.91,91.91,0,0,0,4,23a5,5,0,0,0,4.9,5h0c2.36.22,4.73.34,7.1.34s4.71-.11,7.05-.34A5,5,0,0,0,28,23.08,87.09,87.09,0,0,0,28,9ZM26,23a3,3,0,0,1-3,3h-.1A71.73,71.73,0,0,1,9, 26a3,3,0,0,1-3-3.08A92.4,92.4,0,0,1,6,9,3,3,0,0,1,9.09,6q3.44-.31,6.9-.32T23,6a3,3,0,0,1,3,3.08A85.13,85.13,0,0,1,26,23Z" />
            </g>
          </svg>
        </a>
      </TextBlock>
    </FooterContainer>
  );
};

export default Footer;
