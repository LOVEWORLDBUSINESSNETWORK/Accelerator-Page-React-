import React from "react";
import { Container } from "../../globalStyles";
import {
  Course,
  CourseRow,
  CourseColumnOne,
  CourseColumnTwo,
  SubCourseColumn,
  CourseTopic,
  CourseTime,
  CourseColumn,
  CourseHead,
  CourseMainText,
  CourseDescription,
  CourseLink,
  CourseIcon
} from "../CourseSection/CourseSection.elements";

const CourseSection = ({
  lightBg,
  imgStart,
  TopLine,
  MainText,
  Description,
}) => {
  return (
    <>
      <Course lightBg={lightBg}>
        <Container>
          <CourseRow imgStart={imgStart}>
            <CourseColumnOne>
                <CourseColumnTwo>
                  <SubCourseColumn>
                    <CourseTopic>Negotiating Deals</CourseTopic>
                    <CourseTime>2 hours 30 Minutes</CourseTime>
                    <CourseLink to='/'>
                      View <CourseIcon />
                    </CourseLink>
                  </SubCourseColumn>
                  <SubCourseColumn>
                    <CourseTopic>Allocating Shares in a Startup</CourseTopic>
                    <CourseTime>3 hours 15 Minutes</CourseTime>
                    <CourseLink to='/'>
                      View <CourseIcon />
                    </CourseLink>
                  </SubCourseColumn>
                </CourseColumnTwo>
                <CourseColumnTwo>
                  <SubCourseColumn>
                    <CourseTopic>Negotiating Deals</CourseTopic>
                    <CourseTime>2 hours 30 Minutes</CourseTime>
                    <CourseLink to='/'>
                      View <CourseIcon />
                    </CourseLink>
                  </SubCourseColumn>
                  <SubCourseColumn>
                    <CourseTopic>Negotiating Deals</CourseTopic>
                    <CourseTime>2 hours 30 Minutes</CourseTime>
                    <CourseLink to='/'>
                      View <CourseIcon />
                    </CourseLink>
                  </SubCourseColumn>
                </CourseColumnTwo>
            </CourseColumnOne>
            <CourseColumn>
              <CourseHead TopLine={TopLine}>COURSES</CourseHead>
              <CourseMainText MainText={MainText}>
                Popular courses to attend
              </CourseMainText>
              <CourseDescription Description={Description}>
                Want to start a business but don’t know where to begin? Checkout
                the most courses that your peers are taking before diving into
                the business world, All you need to be a successful entrepreneur
                all on one site to help you get easy access to resources,
                investors and marketplace.
              </CourseDescription>
              <CourseLink to="/">
                View all Courses <CourseIcon />
              </CourseLink>
            </CourseColumn>
          </CourseRow>
        </Container>
      </Course>
    </>
  );
};

export default CourseSection;
