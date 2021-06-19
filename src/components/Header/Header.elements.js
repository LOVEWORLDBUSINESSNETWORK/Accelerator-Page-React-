import styled from "styled-components";

export const Head = styled.div`
  padding: 30px 0 50px 0;
`;

export const HeadRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};

  @media screen and (max-width: 768px) {
    max-width: 540px;
  }
`;

export const HeadColumn = styled.div`
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

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 0;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const TextLine = styled.h2`
  color: ${({ topTextLine }) => (topTextLine ? "#FFC947" : "#4b59f7")};
  font-size: 50px;
  line-height: 1.1;
  margin-bottom: 10px;
`;

export const MidLine = styled.h1`
  margin-bottom: 10px;
  font-size: 70px;
  line-height: 1.1;
  color: ${({ midTextLine }) => (midTextLine ? "#f7f8fa" : "#1c2237")};
`;

export const BottomLine = styled.h1`
  margin-bottom: 30px;
  font-size: 50px;
  line-height: 1.1;
  color: ${({ bottomTextLine }) => (bottomTextLine ? "#f7f8fa" : "#FFC947")};
`;

export const SpaceWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};
`;

export const TextSpace = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`;
