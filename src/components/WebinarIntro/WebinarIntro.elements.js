import styled from "styled-components";
import { FaAngleDoubleRight } from "react-icons/fa";

export const Intro = styled.div`
  padding: 30px 0 50px 0;
`;

export const IntroWrapper = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;

  @media screen and (max-width: 768px) {
    max-width: 540px;
  }
`;

export const IntroName = styled.div`
  font-size: 40px;
  font-weight: 800;
  color: #fff;
  padding-left: 30px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const IntroIcon = styled(FaAngleDoubleRight)`
  vertical-align: middle;
  margin-top: -5px;
  width: 67px;
  height: 50px;
`;

export const IntroText = styled.div`
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  position: absolute;
  top: 130px;
  right: 150px;
  color: #fff;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;
