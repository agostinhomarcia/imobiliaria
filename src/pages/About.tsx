import React from "react";
import styled, { css, keyframes } from "styled-components";
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

const AboutContainer = styled.div`
  padding: 2rem;
`;

const Section = styled.section<{ isVisible: boolean }>`
  margin: 2rem 0;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 1;
      transform: translateY(0);
      animation: ${fadeIn} 0.5s ease-out, ${slideIn} 0.5s ease-out;
    `}
`;

const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1rem;
`;

const SubTitle = styled.h2`
  font-size: 1.75rem;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  font-size: 1.125rem;
  line-height: 1.6;
`;

const TeamGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 2rem;
`;

const TeamMember = styled.div`
  width: 30%;
  margin: 1rem 0;
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const MemberImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 1rem;
`;

const MemberName = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const MemberRole = styled.p`
  font-size: 1rem;
  color: #555;
`;

const About: React.FC = () => {
  const [historyRef, isHistoryVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [valuesRef, isValuesVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [teamRef, isTeamVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [contactRef, isContactVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <AboutContainer>
      <Title>About Us</Title>

      <Section ref={historyRef} isVisible={isHistoryVisible}>
        <SubTitle>Our History</SubTitle>
        <Text>
          Founded in 1990, House of Dreams Realty has been dedicated to helping
          individuals and families find their House of Dreams for over 30 years.
          What started as a small family business has grown into one of the most
          trusted real estate agencies in the country. We pride ourselves on our
          local expertise and our commitment to customer satisfaction.
        </Text>
      </Section>

      <Section ref={valuesRef} isVisible={isValuesVisible}>
        <SubTitle>Our Values</SubTitle>
        <Text>
          At House of Dreams, we believe in putting our clients first. Our
          values are built on:
          <ul>
            <li>
              Integrity: We conduct our business with the highest standards of
              professionalism and ethics.
            </li>
            <li>Transparency: We believe in open and honest communication.</li>
            <li>
              Commitment: We are dedicated to helping our clients achieve their
              real estate goals.
            </li>
          </ul>
        </Text>
      </Section>

      <Section ref={teamRef} isVisible={isTeamVisible}>
        <SubTitle>Meet the Team</SubTitle>
        <TeamGrid>
          <TeamMember>
            <MemberImage src="https://img.freepik.com/fotos-gratis/jovem-empresario-sentado-na-lanchonete-com-o-laptop-na-mesa_342744-455.jpg?uid=R58516977&ga=GA1.1.6015626.1721063839&semt=ais_hybrid" alt="John Doe" />
            <MemberName>John Doe</MemberName>
            <MemberRole>CEO & Founder</MemberRole>
          </TeamMember>
          <TeamMember>
            <MemberImage
              src="https://img.freepik.com/fotos-gratis/vista-frontal-de-empresaria-trabalhando-com-laptop-na-mesa_23-2148824879.jpg?uid=R58516977&ga=GA1.1.6015626.1721063839&semt=ais_hybrid"
              alt="Jane Smith"
            />
            <MemberName>Jane Smith</MemberName>
            <MemberRole>Chief Operating Officer</MemberRole>
          </TeamMember>
          <TeamMember>
            <MemberImage
              src="https://img.freepik.com/fotos-premium/radiante-mulher-de-negocios-latina-lidera-com-confianca-uma-reuniao-de-negocios-ao-tomar-um-cafe_597987-8998.jpg?uid=R58516977&ga=GA1.1.6015626.1721063839&semt=ais_hybrid"
              alt="Emily Johnson"
            />
            <MemberName>Emily Johnson</MemberName>
            <MemberRole>Head of Sales</MemberRole>
          </TeamMember>
          <TeamMember>
            <MemberImage
              src="https://img.freepik.com/fotos-gratis/homem-sorrindo-sentado-a-tabela-do-cafe-com-tablet_1262-2427.jpg?uid=R58516977&ga=GA1.1.6015626.1721063839&semt=ais_hybrid"
              alt="Michael Brown"
            />
            <MemberName>Michael Brown</MemberName>
            <MemberRole>Lead Agent</MemberRole>
          </TeamMember>
          <TeamMember>
            <MemberImage
              src="https://img.freepik.com/fotos-premium/mulher-com-tablet-na-frente-da-janela_99233-89047.jpg?uid=R58516977&ga=GA1.1.6015626.1721063839&semt=ais_hybrid"
              alt="Sarah Wilson"
            />
            <MemberName>Sarah Wilson</MemberName>
            <MemberRole>Marketing Director</MemberRole>
          </TeamMember>
        </TeamGrid>
      </Section>

      <Section ref={contactRef} isVisible={isContactVisible}>
        <SubTitle>Contact Us</SubTitle>
        <Text>
          Have any questions? We'd love to hear from you!
          <br />
          <br />
          <strong>Email:</strong> contact@dreamhomerealty.com 
          <br />
          <strong>Phone:</strong> (123) 456-7890
          <br />
          <strong>Address:</strong> 123 Main Street, Hometown, Country
        </Text>
      </Section>
    </AboutContainer>
  );
};

export default About;
