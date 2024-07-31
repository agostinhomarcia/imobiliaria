import React from 'react';
import styled, { keyframes } from 'styled-components';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 2;
  }
`;

const Card = styled.div<{ isVisible: boolean }>`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem 0;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 0.5s ease-out;
  animation: ${({ isVisible }) => (isVisible ? fadeIn : 'none')} 0.5s ease-out forwards;
`;

const Image = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
`;

const Title = styled.h2`
  margin: 0 0 0.7rem 0;
  text-align: center;
  font-size: 2.5rem;
  text-decoration: none;
`;

const Description = styled.p`
  margin: 0;
  text-align: center;
`;

interface ListingCardProps {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const ListingCard: React.FC<ListingCardProps> = ({ id, title, description, imageUrl }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <Card ref={ref} isVisible={isVisible}>
      <Image src={imageUrl} alt={title} />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Card>
  );
};

export default ListingCard;
