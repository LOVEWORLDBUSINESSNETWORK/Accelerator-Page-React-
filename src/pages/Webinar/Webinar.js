import React from "react";
import { homeObjWebinarSection } from './Data';
import { WebinarIntro, WebinarSection, Articles } from "../../components";

const Webinar = () => {
  return (
    <>
      <WebinarIntro />
      <WebinarSection {...homeObjWebinarSection} />
      <Articles />
    </>
  );
};

export default Webinar;
