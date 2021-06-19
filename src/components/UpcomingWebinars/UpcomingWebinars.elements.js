import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

export const WebinarBg = styled.div`
  color: #fff;
  padding: 50px 80px;
  background-color: #fff;
`;

export const WebinarTitle = styled.p`
  display: flex;
  color: #000;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
`;

export const WebinarRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
  justify-content: space-between;
`;

export const WebinarColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 30px;
  flex: 1;
  max-width: 30%;
  flex-basis: 30%;
  height: 300px;
  background-color: #0A1931;
  border-radius: 10px;
  }

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const WebinarMainText = styled.h1`
  max-width: 210px;
  margin-top: 50px;
  margin-bottom: 85px;
  font-size: 24px;
  font-weight: 600;
  line-height: 120%;
  color: #ffc947;
`;

export const WebinarLink = styled(Link)`
  max-width: 126px;
  margin-bottom: 74px;
  font-size: 18px;
  font-weight: normal;
  line-height: 120%;
  color: #fff;
  text-decoration: none;

  &:hover {
    color: #ffc947;
  }
`;

export const WebinarIcon = styled(FaChevronRight)`
  width: 7px;
  height: 11px;
`;

export const Img = styled.img`
  padding-right: 0;
  position: absolute;
  max-width: 100%;
  vertical-align: middle;

  max-height: 195px;
`;
