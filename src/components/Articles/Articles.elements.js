import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

export const Articls = styled.div`
  color: #000;
  padding: 20px 100px 400px 100px;
  background-color: #fff8f2;
  margin-bottom: -90px;
`;

export const ArticleTitle = styled.p`
  display: flex;
  color: #000;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
`;

export const ArticleRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 500px;
`;

export const ArticleColumn = styled.div`
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

export const ArticleHead = styled.p`
  max-width: 300px;
  margin-bottom: 30px;
  font-size: 24px;
  font-weight: 500;
  line-height: 120%;
`;

export const ArticleMainText = styled.h1`
  max-width: 700px;
  margin-bottom: 30px;
  font-size: 64px;
  font-weight: 700;
  line-height: 120%;
`;

export const ArticleDescription = styled.p`
  max-width: 500px;
  margin-bottom: 30px;
  font-size: 14px;
  font-weight: normal;
  line-height: 150%;
`;

export const ArticleLink = styled(Link)`
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

export const ArticleIcon = styled(FaChevronRight)`
  width: 7px;
  height: 11px;
`;

export const ArticleWrapper = styled.div`
  max-width: 555px;
`;

export const Img = styled.img`
  padding-right: 0;
  margin-bottom: 100px;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`;
