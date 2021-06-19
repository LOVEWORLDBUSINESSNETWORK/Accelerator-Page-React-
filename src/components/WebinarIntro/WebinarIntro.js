import React from "react";
import {
  Intro,
  IntroWrapper,
  IntroName,
  IntroIcon,
  IntroText,
} from "./WebinarIntro.elements";
import { Container } from "../../globalStyles";
import background from "../../images/header.png";

const WebinarIntro = () => {
  return (
    <>
      <Intro>
        <Container>
          <IntroWrapper style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          width: "1240px",
          height: "80px",
          boxShadow: "0px 5px 15px 5px rgba(84, 84, 84, 0.2)",
          borderRadius: "10px",
        }}>
            <IntroName>
              ACCELERATOR <IntroIcon />
            </IntroName>
            <IntroText>Webinar</IntroText>
          </IntroWrapper>
        </Container>
      </Intro>
    </>
  );
};

export default WebinarIntro;
