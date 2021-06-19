import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Innov = styled.div`
  color: #000;
  padding: 100px;
  background-color: #fff;
`;

export const InnovateRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
  justify-content: space-between;
`;
export const InnovateColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
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

export const InnovateTopText = styled.h2`
  max-width: 481px;
  font-size: 50px;
  font-weight: normal;
  line-height: 90%;
`;

export const InnovateMainText = styled.h1`
  max-width: 371px;
  margin-bottom: 10px;
  font-size: 145px;
  font-weight: 800;
  font-style: italic;
  line-height: 100%;
`;

export const InnovateDescription = styled.p`
  max-width: 350px;
  margin-bottom: 14px;
  font-size: 18px;
  font-weight: normal;
  line-height: 120%;
`;

export const InnovateLink = styled(Link)`
color: #000;
  max-width: 182px;
  margin-bottom: 74px;
  font-size: 18px;
  font-weight: 600;
  line-height: 120%;
  text-decoration: none;

  &:hover {
    color: #ffc947;
  }
`;

export const InnovateIcon = styled(FaChevronRight)`
  width: 7px;
  height: 11px;
`;

export const InnovateWrapper = styled.div`
  max-width: 555px;
  display: flex;
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`;
