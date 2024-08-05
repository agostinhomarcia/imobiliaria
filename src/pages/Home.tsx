import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const HomeContainer = styled.div`
  padding: 2rem;
`;

const HeroSection = styled.section<{ isVisible: boolean }>`
  background: url("https://img.freepik.com/fotos-gratis/design-de-interiores-aconchegantes-e-animados_23-2151118908.jpg?uid=R58516977&ga=GA1.1.6015626.1721063839&semt=ais_hybrid") no-repeat center center;
  background-size: cover;
  color: white;
  text-align: center;
  padding: 4rem 2rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  animation: ${({ isVisible }) => (isVisible ? fadeIn : "none")} 1.5s ease-in-out forwards;
`;

const HeroText = styled.h1`
  font-size: 2.5rem;
  margin: 0 0 1rem 0;
`;

const HeroSubText = styled.p`
  font-size: 1.5rem;
`;

const Section = styled.section<{ isVisible: boolean }>`
  margin: 4rem 0;
  text-align: center;
  opacity: 0;
  animation: ${({ isVisible }) => (isVisible ? slideIn : "none")} 1s ease-in-out forwards;
`;

const Feature = styled.div`
  display: inline-block;
  width: 30%;
  margin: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;

  @media (max-width: 768px) {
    width: 80%;
    margin: 1rem 0;
  }
`;

const FeatureTitle = styled.h2`
  margin-top: 0;
`;

const CTAButton = styled(Link)`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  font-size: 1.25rem;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
  margin-top: 1rem;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }
`;

const Testimonial = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem 0;
  background-color: #f9f9f9;
`;

const TestimonialText = styled.p`
  font-style: italic;
`;

const TestimonialAuthor = styled.p`
  text-align: right;
  font-weight: bold;
`;

const ListingCard = styled.div`
  display: inline-block;
  width: 30%;
  margin: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  text-align: left;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    width: 80%;
    margin: 1rem 0;
  }
`;

const ListingImage = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const ListingTitle = styled.h2`
  margin: 0 0 0.5rem 0;
  font-size: 1.5rem;
  text-decoration: none;
`;

const ListingDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const ListingButton = styled(Link)`
  display: inline-block;
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  margin-top: 10px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Home: React.FC = () => {
  const [heroRef, isHeroVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [featuresRef, areFeaturesVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [testimonialsRef, areTestimonialsVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [listingsRef, areListingsVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <HomeContainer>
      <HeroSection ref={heroRef} isVisible={isHeroVisible}>
        <HeroText>House of Dreams</HeroText>
        <HeroSubText>Find the perfect property with us.</HeroSubText>
        <CTAButton to="/listings">View Listings</CTAButton>
      </HeroSection>

      <Section ref={featuresRef} isVisible={areFeaturesVisible}>
        <Feature>
          <FeatureTitle>Wide Selection</FeatureTitle>
          <p>Choose from a variety of properties to suit your needs.</p>
        </Feature>
        <Feature>
          <FeatureTitle>Expert Agents</FeatureTitle>
          <p>Work with our experienced agents to find the perfect home.</p>
        </Feature>
        <Feature>
          <FeatureTitle>Great Deals</FeatureTitle>
          <p>Get the best prices and offers on the market.</p>
        </Feature>
      </Section>

      <Section ref={testimonialsRef} isVisible={areTestimonialsVisible}>
        <h2>What Our Clients Say</h2>
        <Testimonial>
          <TestimonialText>
            "We found our dream home thanks to this amazing real estate agency. Highly recommend!"
          </TestimonialText>
          <TestimonialAuthor>- John Doe</TestimonialAuthor>
        </Testimonial>
        <Testimonial>
          <TestimonialText>
            "Professional and reliable service. Couldn't be happier with our new home."
          </TestimonialText>
          <TestimonialAuthor>- Jane Smith</TestimonialAuthor>
        </Testimonial>
      </Section>

      <Section ref={listingsRef} isVisible={areListingsVisible}>
        <h2>Featured Listings</h2>
        <ListingCard>
          <StyledLink to="/imovel/casa-familia">
            <ListingImage src="https://img.freepik.com/fotos-gratis/belo-resort-de-hotel-em-frente-a-praia-tropical-com-piscina-paradisiaca-para-ferias-ge_1258-150767.jpg?uid=R58516977&ga=GA1.1.6015626.1721063839&semt=ais_hybrid" alt="Beautiful Family House" />
            <ListingTitle>Beautiful Family House</ListingTitle>
            <ListingDescription>A spacious and luxurious family house located in a serene suburb. Features 3 large bedrooms, 2 modern bathrooms, and a beautiful garden.</ListingDescription>
            <ListingButton to="/imovel/casa-familia">View Listing</ListingButton>
          </StyledLink>
        </ListingCard>
        <ListingCard>
          <StyledLink to="/imovel/apartamento-moderno">
            <ListingImage src="https://img.freepik.com/fotos-gratis/modelo-de-casa-3d-com-arquitetura-moderna_23-2151004025.jpg?uid=R58516977&ga=GA1.1.6015626.1721063839&semt=ais_hybrid" alt="Modern Apartment" />
            <ListingTitle>Modern Apartment</ListingTitle>
            <ListingDescription>A stylish apartment in the city center. Features 2 bedrooms, 1 bathroom, a spacious living area, and a balcony with stunning views.</ListingDescription>
            <ListingButton to="/imovel/apartamento-moderno">View Listing</ListingButton>
          </StyledLink>
        </ListingCard>
        <ListingCard>
          <StyledLink to="/imovel/cottage-acolhedor">
            <ListingImage src="https://img.freepik.com/fotos-premium/uma-piscina-com-uma-piscina-e-uma-piscina-com-uma-piscina-no-fundo_1260025-82084.jpg?uid=R58516977&ga=GA1.1.6015626.1721063839&semt=ais_hybrid" alt="Cozy Cottage" />
            <ListingTitle>Cozy Cottage</ListingTitle>
            <ListingDescription>A charming cottage in the countryside. Features 4 bedrooms, 3 bathrooms, a cozy living room with a fireplace, and a large backyard.</ListingDescription>
            <ListingButton to="/imovel/cottage-acolhedor">View Listing</ListingButton>
          </StyledLink>
        </ListingCard>
        <ListingCard>
          <StyledLink to="/imovel/luxury-villa">
            <ListingImage src="https://img.freepik.com/fotos-premium/casa-moderna-a-noite-casa-de-luxo-com-piscina-casa-moderna-a-noite_198067-954303.jpg?uid=R58516977&ga=GA1.1.6015626.1721063839&semt=ais_hybrid" alt="Luxury Villa" />
            <ListingTitle>Luxury Villa</ListingTitle>
            <ListingDescription>An exquisite villa with top-notch amenities. Features 5 bedrooms, 4 bathrooms, a private pool, and a beautiful ocean view.</ListingDescription>
            <ListingButton to="/imovel/luxury-villa">View Listing</ListingButton>
          </StyledLink>
        </ListingCard>
        <ListingCard>
          <StyledLink to="/imovel/seaside-bungalow">
            <ListingImage src="https://img.freepik.com/fotos-premium/villa-moderna-e-elegante-com-piscina-no-patio_89381-7300.jpg?uid=R58516977&ga=GA1.1.6015626.1721063839&semt=ais_hybrid" alt="Seaside Bungalow" />
            <ListingTitle>Seaside Bungalow</ListingTitle>
            <ListingDescription>A cozy bungalow by the sea. Features 2 bedrooms, 1 bathroom, and a spacious deck perfect for enjoying the ocean breeze.</ListingDescription>
            <ListingButton to="/imovel/seaside-bungalow">View Listing</ListingButton>
          </StyledLink>
        </ListingCard>
        <ListingCard>
          <StyledLink to="/imovel/mountain-cabin">
            <ListingImage src="https://img.freepik.com/fotos-gratis/belo-resort-de-hotel-em-frente-a-praia-tropical-com-piscina-paradisiaca-para-ferias-ge_1258-150767.jpg?uid=R58516977&ga=GA1.1.6015626.1721063839&semt=ais_hybrid" alt="Mountain Cabin" />
            <ListingTitle>Mountain Cabin</ListingTitle>
            <ListingDescription>A rustic cabin in the mountains. Features 3 bedrooms, 2 bathrooms, a cozy living area with a fireplace, and stunning mountain views.</ListingDescription>
            <ListingButton to="/imovel/mountain-cabin">View Listing</ListingButton>
          </StyledLink>
        </ListingCard>
      </Section>
    </HomeContainer>
  );
};

export default Home;
