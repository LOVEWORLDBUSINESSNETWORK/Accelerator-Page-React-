import React from "react";
import { Container } from "../../globalStyles";
import {
  Innov,
  InnovateRow,
  InnovateColumn,
  InnovateTopText,
  InnovateMainText,
  InnovateDescription,
  InnovateLink,
  InnovateIcon,
  InnovateWrapper,
  Img
} from "../Innovate/Innovate.elements";
import innovateImage from "../../images/ideas.png";


const Innovate = () => {
  return (
    <>
      <Innov>
        <Container>
          <InnovateRow>
            <InnovateColumn>
              <InnovateTopText>Bring your Ideas to</InnovateTopText>
              <InnovateMainText>LIVE!</InnovateMainText>
              <InnovateDescription>
                Join the innovative community and present innovations that
                influences Humanity.
              </InnovateDescription>
              <InnovateLink to='/'>
                Join the Community <InnovateIcon />
              </InnovateLink>
            </InnovateColumn>
            <InnovateColumn>
              <InnovateWrapper>
                <Img src={innovateImage}/>
              </InnovateWrapper>
            </InnovateColumn>
          </InnovateRow>
        </Container>
      </Innov>
    </>
  );
};

export default Innovate;
