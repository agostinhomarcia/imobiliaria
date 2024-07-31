import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const PropertyDetailsContainer = styled.div`
  padding: 2rem;
`;

const PropertyImage = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const PropertyTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const PropertyDescription = styled.p`
  font-size: 1.25rem;
  margin-bottom: 1rem;
`;

const PropertyInfo = styled.div`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const PropertyDetails: React.FC = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();

  // Mock data for example purposes. Replace with actual data fetching logic.
  const propertyData = {
    "casa-familia": {
      id: 1,
      title: "Beautiful Family House",
      description: "A spacious and luxurious family house located in a serene suburb. Features 3 large bedrooms, 2 modern bathrooms, and a beautiful garden.",
      imageUrl: "https://img.freepik.com/fotos-gratis/belo-resort-de-hotel-em-frente-a-praia-tropical-com-piscina-paradisiaca-para-ferias-ge_1258-150767.jpg?uid=R58516977&ga=GA1.1.6015626.1721063839&semt=ais_hybrid",
      details: "Additional details about the Beautiful Family House."
    },
    "apartamento-moderno": {
      id: 2,
      title: "Modern Apartment",
      description: "A stylish apartment in the city center. Features 2 bedrooms, 1 bathroom, a spacious living area, and a balcony with stunning views.",
      imageUrl: "https://img.freepik.com/fotos-gratis/modelo-de-casa-3d-com-arquitetura-moderna_23-2151004025.jpg?uid=R58516977&ga=GA1.1.6015626.1721063839&semt=ais_hybrid",
      details: "Additional details about the Modern Apartment."
    },
    "cottage-acolhedor": {
      id: 3,
      title: "Cozy Cottage",
      description: "A charming cottage in the countryside. Features 4 bedrooms, 3 bathrooms, a cozy living room with a fireplace, and a large backyard.",
      imageUrl: "https://img.freepik.com/fotos-premium/uma-piscina-com-uma-piscina-e-uma-piscina-com-uma-piscina-no-fundo_1260025-82084.jpg?uid=R58516977&ga=GA1.1.6015626.1721063839&semt=ais_hybrid",
      details: "Additional details about the Cozy Cottage."
    },
    "luxury-villa": {
      id: 4,
      title: "Luxury Villa",
      description: "An exquisite villa with top-notch amenities. Features 5 bedrooms, 4 bathrooms, a private pool, and a beautiful ocean view.",
      imageUrl: "https://img.freepik.com/fotos-premium/casa-moderna-a-noite-casa-de-luxo-com-piscina-casa-moderna-a-noite_198067-954303.jpg?uid=R58516977&ga=GA1.1.6015626.1721063839&semt=ais_hybrid",
      details: "Additional details about the Luxury Villa."
    },
    "seaside-bungalow": {
      id: 5,
      title: "Seaside Bungalow",
      description: "A cozy bungalow by the sea. Features 2 bedrooms, 1 bathroom, and a spacious deck perfect for enjoying the ocean breeze.",
      imageUrl: "https://img.freepik.com/fotos-premium/villa-moderna-e-elegante-com-piscina-no-patio_89381-7300.jpg?uid=R58516977&ga=GA1.1.6015626.1721063839&semt=ais_hybrid",
      details: "Additional details about the Seaside Bungalow."
    },
    "mountain-cabin": {
      id: 6,
      title: "Mountain Cabin",
      description: "A rustic cabin in the mountains. Features 3 bedrooms, 2 bathrooms, a cozy living area with a fireplace, and stunning mountain views.",
      imageUrl: "https://img.freepik.com/fotos-gratis/belo-resort-de-hotel-em-frente-a-praia-tropical-com-piscina-paradisiaca-para-ferias-ge_1258-150767.jpg?uid=R58516977&ga=GA1.1.6015626.1721063839&semt=ais_hybrid",
      details: "Additional details about the Mountain Cabin."
    }
  };

  const property = propertyData[id as keyof typeof propertyData];

  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <PropertyDetailsContainer>
      <PropertyImage src={property.imageUrl} alt={property.title} />
      <PropertyTitle>{property.title}</PropertyTitle>
      <PropertyDescription>{property.description}</PropertyDescription>
      <PropertyInfo>{property.details}</PropertyInfo>
    </PropertyDetailsContainer>
  );
};

export default PropertyDetails;
