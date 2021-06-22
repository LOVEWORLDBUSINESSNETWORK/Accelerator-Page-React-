import { FaChevronRight } from "react-icons/fa";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const WebinarSec = styled.div`
  background-color: #f6f5f5;
  padding: 30px 0 50px 0;
`;

export const WebinarContent = styled.div`
  padding: 50px 30px;
  margin: 20px -15px 10px -15px;
  align-items: center;
`;

export const TextWrapper = styled.div``;

export const Heading = styled.h2`
  font-weight: bold;
  font-size: 48px;
  line-height: 150%;
  color: #000;
  max-width: 547px;
  margin-bottom: 40px;
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

export const ActionArrow = styled(FaChevronRight)`
  width: 10px;
  height: 15px;
  margin-left: 10px;
`;
