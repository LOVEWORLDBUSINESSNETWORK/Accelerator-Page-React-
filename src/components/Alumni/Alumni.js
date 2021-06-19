import React from "react";
import { Container } from "../../globalStyles";
import {
  Alums,
  AlumsRow,
  AlumsColumnOne,
  AlumsColumnTwo,
  AlumsHead,
  AlumsMainText,
  AlumsDescription,
  AlumsLink,
  AlumsIcon,
  AlumsWrapper,
  Img
} from "../Alumni/Alumni.elements";
import alumniImage from "../../images/alums1.png";

const Alumni = ( {TopLine, MainText, Description} ) => {
  return (
    <>
      <Alums>
        <Container>
          <AlumsRow>
            <AlumsColumnOne>
              <AlumsHead TopLine={TopLine}>ALUMNI STORIES</AlumsHead>
              <AlumsMainText MainText={MainText}>
                I never knew how to negotiate and set pricing for my products.
              </AlumsMainText>
              <AlumsDescription Description={Description}>
                Listen to young Martins share his experieces about how love
                world changed his negotiation and pricing knowledge thereby
                increasing his monthly income and saving his company time,
                manpower and resources.
              </AlumsDescription>
              <AlumsLink to="/">
                Listen to Martin’s Testimony <AlumsIcon />
              </AlumsLink>
            </AlumsColumnOne>
            <AlumsColumnTwo>
              <AlumsWrapper>
                <Img src={alumniImage} alt={alumniImage} />
              </AlumsWrapper>
            </AlumsColumnTwo>
          </AlumsRow>
        </Container>
      </Alums>
    </>
  );
};

export default Alumni;
