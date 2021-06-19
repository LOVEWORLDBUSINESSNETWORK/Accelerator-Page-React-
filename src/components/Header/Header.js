import React from "react";
import { Container, Button } from "../../globalStyles";
import { Link } from "react-router-dom";
import {
  Head,
  HeadRow,
  HeadColumn,
  TextWrapper,
  TextLine,
  MidLine,
  BottomLine,
  SpaceWrapper,
  TextSpace,
} from "./Header.elements";
import background from "../../images/header.png";

const Header = ({
  topTextLine,
  textline,
  midTextLine,
  midline,
  bottomTextLine,
  bottomline,
  buttonLabel,
  primary,
  start,
  imgStart,
}) => {
  return (
    <>
      <Head>
        <Container>
          <HeadRow
            imgStart={imgStart}
            style={{
              backgroundImage: `url(${background})`,
              backgroundRepeat: "no-repeat",
              width: "1240px",
              height: "600px",
            }}
          >
            <HeadColumn>
              <TextWrapper>
                <TextLine topTextLine={topTextLine}>{textline}</TextLine>
                <MidLine midTextLine={midTextLine}>{midline}</MidLine>
                <BottomLine bottomTextLine={bottomTextLine}>
                  {bottomline}
                </BottomLine>
                <Link to="apply">
                  <Button big fontBig primary={primary}>
                    {buttonLabel}
                  </Button>
                </Link>
              </TextWrapper>
            </HeadColumn>
            <HeadColumn>
              <SpaceWrapper start={start}>
                <TextSpace />
              </SpaceWrapper>
            </HeadColumn>
          </HeadRow>
        </Container>
      </Head>
    </>
  );
};

export default Header;
