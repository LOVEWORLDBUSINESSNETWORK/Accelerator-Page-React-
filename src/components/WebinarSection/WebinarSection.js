import React from "react";
import bg1 from "../../images/bg1.png";
import { Container } from "../../globalStyles";
import { WebinarSec, WebinarRow, TextWrapper, Heading, Link, ActionArrow } from "./WebinarSection.elements";

const WebinarSection = (imgStart, headline ) => {
  return (
    <>
      <WebinarSec>
        <Container>
          <WebinarRow
            imgStart={imgStart}
            style={{
              backgroundImage: `url(${bg1}`,
              backgroundRepeat: "no-repeat",
              width: "1240px",
              height: "600px",
            }}
          >
            <TextWrapper>
              <Heading>{headline}</Heading>
              <Link to="join">
                  Join Now
                  <ActionArrow />
              </Link>
            </TextWrapper>
          </WebinarRow>
        </Container>
      </WebinarSec>
    </>
  );
};

export default WebinarSection;
