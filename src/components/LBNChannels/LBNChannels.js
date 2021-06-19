import React from "react";
import { Container } from "../../globalStyles";
import {
  ChannelBg,
  ChannelRow,
  ChannelColumn,
  ChannelHead,
  ChannelLink,
  ChannelIcon,
  ChannelMainText,
  ChannelDescription,
} from "./LBNChannels.elements";

const LBNChannels = ({
  imgStart,
  TopLine,
  MainText,
  Description,
  ChanLink,
}) => {
  return (
    <>
      <ChannelBg>
        <Container>
          <ChannelRow imgStart={imgStart}>
            <ChannelColumn>
              <ChannelHead TopLine={TopLine}>WEBINARS</ChannelHead>
              <ChannelMainText MainText={MainText}>
                Get Knowledge
              </ChannelMainText>
              <ChannelDescription Description={Description}>
                Attend Monthly Webinars to get the chance to meet with speakers
                who are active in the entrepreneural and business industry
              </ChannelDescription>
              <ChannelLink to="/" ChanLink={ChanLink}>
                Go to Webinars <ChannelIcon />
              </ChannelLink>
            </ChannelColumn>
            <ChannelColumn>
              <ChannelHead TopLine={TopLine}>START UP FUNDING</ChannelHead>
              <ChannelMainText MainText={MainText}>
                Get Sponsored
              </ChannelMainText>
              <ChannelDescription Description={Description}>
                Complete the love world next academy business training and get
                the chance to pitch your business investment plans to potential
                investors.
              </ChannelDescription>
              <ChannelLink to="/" ChanLink={ChanLink}>
                Go to Funds <ChannelIcon />
              </ChannelLink>
            </ChannelColumn>
            <ChannelColumn>
              <ChannelHead TopLine={TopLine}>BUSINESS CONNECT</ChannelHead>
              <ChannelMainText MainText={MainText}>
                Get Connected
              </ChannelMainText>
              <ChannelDescription Description={Description}>
                Push your business ads on the love world next platforms and get
                access to audiences who are ready to purchase a working service
                or product.
              </ChannelDescription>
              <ChannelLink to="/" ChanLink={ChanLink}>
                Go to Marketplace <ChannelIcon />
              </ChannelLink>
            </ChannelColumn>
          </ChannelRow>
        </Container>
      </ChannelBg>
    </>
  );
};

export default LBNChannels;
