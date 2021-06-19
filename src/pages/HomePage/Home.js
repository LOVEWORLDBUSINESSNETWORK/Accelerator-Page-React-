import React from "react";
import { homeObjZero, homeObjCourse } from "./Data";
import {
  Header,
  CourseSection,
  LBNChannels,
  Innovate,
  Alumni,
  UpcomingWebinars,
  Articles
} from "../../components";

const Home = () => {
  return (
    <>
      <Header {...homeObjZero} />
      <CourseSection {...homeObjCourse} />
      <LBNChannels />
      <Innovate />
      <Alumni />
      <UpcomingWebinars />
      <Articles />
    </>
  );
};

export default Home;
