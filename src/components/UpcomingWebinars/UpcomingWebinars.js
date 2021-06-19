import React from "react";
import { Container } from "../../globalStyles";
import {
  WebinarBg,
  WebinarTitle,
  WebinarRow,
  WebinarColumn,
  WebinarLink,
  WebinarIcon,
  WebinarMainText,
} from "./UpcomingWebinars.elements";
import backImage from "../../images/arc.svg";

const UpcomingWebinars = ({ imgStart, MainText, WebsLink }) => {
  return (
    <>
      <WebinarBg>
        <Container>
          <WebinarTitle>UPCOMING WEBINARS</WebinarTitle>
          <WebinarRow imgStart={imgStart}>
            <WebinarColumn
              style={{
                backgroundImage: `url(${backImage})`,
                backgroundRepeat: "no-repeat",
              }}
            >
              <WebinarMainText MainText={MainText}>
                Dealing with Business Bargains
              </WebinarMainText>
              <WebinarLink to="/" WebsLink={WebsLink}>
                View Details <WebinarIcon />
              </WebinarLink>
            </WebinarColumn>
            <WebinarColumn
              style={{
                backgroundImage: `url(${backImage})`,
                backgroundRepeat: "no-repeat",
              }}
            >
              <WebinarMainText MainText={MainText}>
                Employing the Right staffs for your Company
              </WebinarMainText>
              <WebinarLink to="/" WebinarLink={WebinarLink}>
                View Details <WebinarIcon />
              </WebinarLink>
            </WebinarColumn>
            <WebinarColumn
              style={{
                backgroundImage: `url(${backImage})`,
                backgroundRepeat: "no-repeat",
              }}
            >
              <WebinarMainText MainText={MainText}>
                Duty delegation in a Standard Organization.
              </WebinarMainText>
              <WebinarLink to="/" WebinarLink={WebinarLink}>
                View Details
                <WebinarIcon />
              </WebinarLink>
            </WebinarColumn>
          </WebinarRow>
        </Container>
      </WebinarBg>
    </>
  );
};

export default UpcomingWebinars;
