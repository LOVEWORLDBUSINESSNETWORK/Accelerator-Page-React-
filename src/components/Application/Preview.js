import React from "react";
import { ProgressBar } from "react-bootstrap";
import { Container } from "../../globalStyles";
import {
  Head,
  PreviewHead,
  Description,
	Apply,
  ApplyForm,
	Sections,
	FormTitle,
	FormDescription,
	FormLink,
	FormButton,
	FormSubmit
} from './ApplicationHome.elements'
import line from '../../images/line.svg'

const Preview = (now) => {
  return (
    <>
      <Head>
        <PreviewHead>Dear Benita John</PreviewHead>
        <Description>
          Please confirm your details below
        </Description>
      </Head>
      <Apply>
        <Container>
          <ApplyForm>
            <Sections>
              <FormTitle>Section One</FormTitle>
              <FormDescription>
                Select the Category that best suits your business / Innovation
              </FormDescription>
              <h6>What category best describes your Business or Innovation?</h6>
              <p>Food and Agric</p>
              <img src={line} alt="line" />
              <h6>Are you a business owner or Innovations?</h6>
              <p>Business Owner</p>
              <img src={line} alt="line" />
              <h6>What do you consider your business as?</h6>
              <p>Existing</p>
              <img src={line} alt="line" />
              <h6>How long?</h6>
              <p> &nspr; 1 year</p>
            </Sections>
            


            <FormLink to="/apply">
              <FormButton>Edit</FormButton>
            </FormLink>
            <FormSubmit to="/confirmapplication">
              <FormButton>Submit</FormButton>
            </FormSubmit>
            <ProgressBar now={now} />
          </ApplyForm>
        </Container>
      </Apply>
    </>
  );
};

export default Preview;
