import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

export const Alums = styled.div`
  color: #000;
  padding: 100px;
  background-color: #fff8f2;
`;

export const AlumsRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

export const AlumsColumnOne = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 60%;
  flex-basis: 60%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const AlumsColumnTwo = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 40%;
  flex-basis: 40%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const AlumsHead = styled.p`
  max-width: 300px;
  margin-bottom: 30px;
  font-size: 24px;
  font-weight: normal;
  line-height: 120%;
`;

export const AlumsMainText = styled.h1`
  max-width: 700px;
  margin-bottom: 30px;
  font-size: 64px;
  font-weight: 700;
  line-height: 120%;
`;

export const AlumsDescription = styled.p`
  max-width: 500px;
  margin-bottom: 30px;
  font-size: 14px;
  font-weight: normal;
  line-height: 150%;
`;

export const AlumsLink = styled(Link)`
  color: #000;
  max-width: 272px;
  font-size: 18px;
  font-weight: 700;
  line-height: 120%;
  text-decoration: none;

  &:hover {
    color: #ffc947;
  }
`;

export const AlumsIcon = styled(FaChevronRight)`
  width: 7px;
  height: 11px;
`;

export const AlumsWrapper = styled.div`
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
