import React from "react";
// import bg2 from "../../images/bg2.png";
import { Container } from "../../globalStyles";
import {
  WebinarSec,
  WebinarContent,
  TextWrapper,
  Heading,
  WebinarLink,
  ActionArrow,
} from "./WebinarSection.elements";

const WebinarSection = ({ headline, bg1, bg2 }) => {
  return (
    <>
      <WebinarSec>
        <Container>
          <WebinarContent
            style={{
              backgroundImage: `url(${bg1})`,
              backgroundRepeat: "no-repeat",
              width: "1240px",
            }}
          >
            <TextWrapper>
              <Heading>{headline}</Heading>
              <WebinarLink to="join">
                Join Now
                <ActionArrow />
              </WebinarLink>
            </TextWrapper>
          </WebinarContent>
          <WebinarContent
            style={{
              backgroundImage: `url(${bg2})`,
              backgroundRepeat: "no-repeat",
              width: "1240px",
            }}
          >
            <TextWrapper>
              <Heading>{headline}</Heading>
              <WebinarLink to="join">
                Join Now
                <ActionArrow />
              </WebinarLink>
            </TextWrapper>
          </WebinarContent>
        </Container>
      </WebinarSec>
    </>
  );
};

export default WebinarSection;
