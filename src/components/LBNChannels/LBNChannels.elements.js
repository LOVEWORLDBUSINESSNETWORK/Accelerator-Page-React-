import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

export const ChannelBg = styled.div`
  color: #fff;
  padding: 50px 80px;
  background-Color: #FFF8F2;
`;

export const ChannelRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
  justify-content: space-between;
`;

export const ChannelColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 30px;
  flex: 1;
  max-width: 30%;
  flex-basis: 30%;
  height: 500px;
  background-color: #0A1931;
  border-radius: 10px;

  &:hover {
    transform: scale(1.1);
    transition: all 0.5s ease-in-out;
  }

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const ChannelHead = styled.p`
  max-width: 239px;
  margin-bottom: 30px;
  margin-top: 40px;
  font-size: 24px;
  font-weight: 600;
  line-height: 120%;
  color:  #D9D0D0;
`;

export const ChannelMainText = styled.h1`
  max-width: 210px;
  margin-bottom: 30px;
  font-size: 36px;
  font-weight: 800;
  line-height: 120%;
  color:  #FFC947;
`;

export const ChannelDescription = styled.p`
  max-width: 300px;
  margin-bottom: 111px;
  font-size: 14px;
  font-weight: normal;
  line-height: 120%;
  color:  #E9E9E9;
  text-align: justify;
`;

export const ChannelLink = styled(Link)`
  max-width: 182px;
  margin-bottom: 74px;
  font-size: 18px;
  font-weight: 600;
  line-height: 120%;
  color:  #fff;
  text-decoration: none;

  &:hover {
    color: #FFC947;
  }
`;

export const ChannelIcon = styled(FaChevronRight)`
  width: 7px;
  height: 11px;
`;