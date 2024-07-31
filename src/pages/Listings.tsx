import React from 'react';
import styled from 'styled-components';
import ListingCard from '../components/ListingCard';

const ListingsContainer = styled.div`
  padding: 2rem;

`;

const ListingTitle = styled.h2`
  margin: 0 0 0.7rem 0;
  text-align: center;
  font-size: 2.5rem;
  text-decoration: none;
`;

const listingsData = [
  {
    id: 1,
    title: 'Beautiful Family House',
    description: 'A beautiful house in the suburbs with 3 bedrooms and 2 bathrooms.',
    imageUrl: 'https://img.freepik.com/fotos-gratis/belo-resort-de-hotel-em-frente-a-praia-tropical-com-piscina-paradisiaca-para-ferias-ge_1258-150767.jpg?uid=R58516977&ga=GA1.1.6015626.1721063839&semt=ais_hybrid',
  },
  {
    id: 2,
    title: 'Modern Apartment',
    description: 'A modern apartment in the city center with 2 bedrooms and 1 bathroom.',
    imageUrl: 'https://img.freepik.com/fotos-gratis/modelo-de-casa-3d-com-arquitetura-moderna_23-2151004025.jpg?uid=R58516977&ga=GA1.1.6015626.1721063839&semt=ais_hybrid',
  },
  {
    id: 3,
    title: 'Cozy Cottage',
    description: 'A cozy cottage in the countryside with 4 bedrooms and 3 bathrooms.',
    imageUrl: 'https://img.freepik.com/fotos-premium/uma-piscina-com-uma-piscina-e-uma-piscina-com-uma-piscina-no-fundo_1260025-82084.jpg?uid=R58516977&ga=GA1.1.6015626.1721063839&semt=ais_hybrid',
  },
  {
    id: 4,
    title: 'Luxurious Villa',
    description: 'A luxurious villa with 5 bedrooms, 4 bathrooms, and a private pool.',
    imageUrl: 'https://img.freepik.com/fotos-premium/casa-moderna-a-noite-casa-de-luxo-com-piscina-casa-moderna-a-noite_198067-954303.jpg?uid=R58516977&ga=GA1.1.6015626.1721063839&semt=ais_hybrid',
  },
  {
    id: 5,
    title: 'Urban Loft',
    description: 'A stylish urban loft with 2 bedrooms and a great view of the city.',
    imageUrl: 'https://img.freepik.com/fotos-premium/villa-moderna-e-elegante-com-piscina-no-patio_89381-7300.jpg?uid=R58516977&ga=GA1.1.6015626.1721063839&semt=ais_hybrid',
  },
  {
    id: 6,
    title: 'Mountain Cabin',
    description: 'A cozy mountain cabin with 3 bedrooms, 2 bathrooms, and a fireplace.',
    imageUrl: 'https://img.freepik.com/fotos-gratis/belo-resort-de-hotel-em-frente-a-praia-tropical-com-piscina-paradisiaca-para-ferias-ge_1258-150767.jpg?uid=R58516977&ga=GA1.1.6015626.1721063839&semt=ais_hybrid',
  },
];

const Listings: React.FC = () => {
  return (
    <ListingsContainer>
      <ListingTitle>Listings</ListingTitle>
      {listingsData.map((listing) => (
        <ListingCard
          key={listing.id}
          id={listing.id}
          title={listing.title}
          description={listing.description}
          imageUrl={listing.imageUrl}
        />
      ))}
    </ListingsContainer>
  );
};

export default Listings;
