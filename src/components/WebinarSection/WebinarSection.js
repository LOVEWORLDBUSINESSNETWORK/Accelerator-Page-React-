import React from "react";
import bg1 from "../../images/bg1.png";
import bg2 from "../../images/bg2.png";
import bg3 from "../../images/bg3.png";
import bg4 from "../../images/bg4.png";
import bg5 from "../../images/bg5.png";
import { Container } from "../../globalStyles";
import {
  WebinarSections,
  WebinarSec,
  WebinarSecTwo,
  WebinarHeading,
  WebinarDate,
  WebinarTime,
  WebinarContent,
  TextWrapper,
  Heading,
  WebinarLink,
  RegLink,
  ActionArrow,
  ActArrow,
} from "./WebinarSection.elements";

const WebinarSection = () => {
  return (
    <>
      <WebinarSections>
          <WebinarSec>
            <Container>
              <WebinarHeading>WEBINARS TODAY</WebinarHeading>
              <WebinarContent
                style={{
                  backgroundImage: `url(${bg1})`,
                  backgroundRepeat: "no-repeat",
                  width: "1240px",
                }}
              >
                <TextWrapper>
                  <Heading>Dealing with Business Bargains</Heading>
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
                  <Heading>Balancing Business Accounts</Heading>
                  <WebinarLink to="join">
                    Join Now
                    <ActionArrow />
                  </WebinarLink>
                </TextWrapper>
              </WebinarContent>
            </Container>
          </WebinarSec>

          <WebinarSecTwo>
            <Container>
            <WebinarHeading>UPCOMING EVENTS</WebinarHeading>
            <WebinarContent
              style={{
                backgroundImage: `url(${bg3})`,
                backgroundRepeat: "no-repeat",
                width: "1240px",
              }}
            >
              <TextWrapper>
                <Heading>Incorporating Good work etiquettes</Heading>
                <WebinarDate>
                  15TH JUNE, 2021
                  <WebinarTime>12:00PM GMT</WebinarTime>
                  <RegLink to="join">
                    REGISTER
                    <ActArrow />
                  </RegLink>
                </WebinarDate>
              </TextWrapper>
            </WebinarContent>
            <WebinarContent
              style={{
                backgroundImage: `url(${bg4})`,
                backgroundRepeat: "no-repeat",
                width: "1240px",
              }}
            >
              <TextWrapper>
                <Heading>Employing the Right staffs for your Company</Heading>
                <WebinarDate>
                  21ST JUNE, 2021
                  <WebinarTime>1:30PM GMT</WebinarTime>
                  <RegLink to="join">
                    REGISTER
                    <ActArrow />
                  </RegLink>
                </WebinarDate>
              </TextWrapper>
            </WebinarContent>
            <WebinarContent
              style={{
                backgroundImage: `url(${bg5})`,
                backgroundRepeat: "no-repeat",
                width: "1240px",
              }}
            >
              <TextWrapper>
                <Heading>Duty delegation  in a Standard Organization.</Heading>
                <WebinarDate>
                  22ND JUNE, 2021
                  <WebinarTime>4:00PM GMT</WebinarTime>
                  <RegLink to="join">
                    REGISTER
                    <ActArrow />
                  </RegLink>
                </WebinarDate>
              </TextWrapper>
            </WebinarContent>
            </Container>
          </WebinarSecTwo>
      </WebinarSections>
    </>
  );
};

export default WebinarSection;
