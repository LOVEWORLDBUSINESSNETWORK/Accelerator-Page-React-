import React from "react";
import { homeObjWebinarSection, homeObjWebinarSectionTwo } from './Data';
import { WebinarIntro, WebinarSection, Articles } from "../../components";

const Webinar = () => {
  return (
    <>
      <WebinarIntro />
      <WebinarSection {...homeObjWebinarSection} />
      <WebinarSection {...homeObjWebinarSectionTwo} />
      <Articles />
    </>
  );
};

export default Webinar;
