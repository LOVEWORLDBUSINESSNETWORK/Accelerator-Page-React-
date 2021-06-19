import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

export const Course = styled.div`
  max-height: 680px;
  display: flex;
  padding: 50px;
`;

export const CourseRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

export const CourseColumnOne = styled.div`
  display: flex;
  margin: 0 -5px -5px -5px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  max-width: 50%;
  flex-basis: 50%;
`;

export const CourseColumnTwo = styled.div`
  padding: 0 15px;
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

export const SubCourseColumn = styled.div`
  background: #F5F9FF;
  box-shadow: 0px 0.888572px 13.3286px 1.77714px rgba(196, 196, 196, 0.25);
  border-radius: 10px;
  height: 225px;
  padding: 30px;
  margin-bottom: 30px;

  @media screen and (max-width: 768px) {
    max-width: 100;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  } */
`;

export const CourseTopic = styled.h3`
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 120%;
  width: 210px;
  height: 58px;
  color: #0a1931;
`;

export const CourseTime = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 120%;
  color: #000000;
  margin-top: 10px;
  margin-bottom: 56px;
`;

export const CourseColumn = styled.div`
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

export const CourseHead = styled.p`
  max-width: 100px;
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: normal;
  line-height: 120%;
`;

export const CourseMainText = styled.h1`
  max-width: 420px;
  margin-bottom: 20px;
  font-size: 50px;
  font-weight: 700;
  line-height: 120%;
`;

export const CourseDescription = styled.p`
  max-width: 500px;
  margin-bottom: 40px;
  font-size: 13px;
  font-weight: normal;
  line-height: 150%;
`;

export const CourseLink = styled(Link)`
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

export const CourseIcon = styled(FaChevronRight)`
  width: 7px;
  height: 11px;
`;
