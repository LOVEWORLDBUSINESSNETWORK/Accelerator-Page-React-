import { FaChevronRight } from "react-icons/fa";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const WebinarSections = styled.div`
  width: 100%;
`;

export const WebinarSec = styled.div`
  padding: 40px 0 50px 0;
  background-color: #F6F5F5;
  width: 100%
  margin: 50px 0;
`;

export const WebinarSecTwo = styled.div`
  padding: 30px 0 50px 0;
  margin: 100px 0;
`;

export const WebinarHeading = styled.h5`
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;
`;

export const WebinarContent = styled.div`
  padding: 50px 30px;
  margin: 20px -15px 10px -15px;
  align-items: center;
`;

export const TextWrapper = styled.div``;

export const Heading = styled.h2`
  font-weight: bold;
  font-size: 45px;
  line-height: 150%;
  color: #000;
  width: 547px;
  margin-bottom: 40px;
`;

export const WebinarDate = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 150%;
  color: #545454;
`;

export const WebinarTime = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 150%;
  color: #545454;
  display: inline;
  margin-left: 15px;
`;

export const WebinarLink = styled(Link)`
  font-weight: 600;
  font-size: 25.3333px;
  line-height: 150%;
  text-decoration: none;
  color: #000;

  &:hover {
    color: #ffc947;
  }
`;

export const RegLink = styled(Link)`
  display: inline;
  font-weight: bold;
  font-size: 18px;
  line-height: 150%;
  text-decoration: none;
  color: #545454;
  width: 200px;
  padding: 15px 56px;
  background-color: #F7F7F7;
  margin-left: 680px;


  &:hover {
    color: #F7F7F7;
    background-color: #0A1931;
  }
`;


export const ActionArrow = styled(FaChevronRight)`
  width: 10px;
  height: 15px;
  margin-left: 10px;
`;

export const ActArrow = styled(FaChevronRight)`
  width: 7px;
  height: 11px;
  margin-left: 5px;
`;
