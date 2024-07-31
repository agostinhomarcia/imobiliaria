import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  padding: 2rem 1rem;
  text-align: center;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const FooterSection = styled.div`
  margin: 1rem 0;

  @media (min-width: 768px) {
    margin: 0 1rem;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const FooterLink = styled(Link)`
  display: inline;
  margin-right: 20px;
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #4CAF50;

    .active-icon {
      transform: scale(1.2);
      transition: transform 0.3s ease;
    }
  }
`;

const FooterText = styled.p`
  margin: 0.5rem;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const SocialIcon = styled.a`
  color: white;
  margin: 0 0.5rem;
  font-size: 1.5rem;
  transition: color 0.3s;

  &:hover {
    color: #4CAF50;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterText>© 2024 Real Estate</FooterText>
          <FooterText>All Rights Reserved</FooterText>
        </FooterSection>
        <FooterSection>
          <FooterLinks>
            <FooterLink to="/">Home</FooterLink>
            <FooterLink to="/listings">Listings</FooterLink>
            <FooterLink to="/contact">Contact</FooterLink>
            <FooterLink to="/about">About Us</FooterLink>
          </FooterLinks>
        </FooterSection>
        <FooterSection>
          <SocialIcons>
            <SocialIcon href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </SocialIcon>
            <SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </SocialIcon>
            <SocialIcon href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </SocialIcon>
          </SocialIcons>
        </FooterSection>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
