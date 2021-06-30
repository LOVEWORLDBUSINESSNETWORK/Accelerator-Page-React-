import { Container } from "../../globalStyles";
import React from "react";
import { ProgressBar } from "react-bootstrap";
import {
  Apply,
  ApplyForm,
  Label,
  FormTitle,
  FormDescription,
  FormLink,
  Dropdown,
  FormButton,
  FormSubmit
} from "./ApplicationHome.elements";

const ApplicationThreeHome = ({ now, choice }) => {

  return (
    <Apply>
      <Container>
        <ApplyForm>
          <Label>
            <FormTitle>Section Three</FormTitle>
            <FormDescription>
              Business or Innovation Information
            </FormDescription>
          </Label>
          <Dropdown>
            <form>
              <label for="aim">In less than 200 words, state the aim and Obectives of your idea, business or innovation *</label>
              <textarea
                id="aim"
                type="text"
                placeholder="It can aslo be known as the vision and the mission of your idea, business or innovation"
              />
              <label for="finance">If exisiting, kindly give a brief financial history of your organization *</label>
              <textarea
                id="finance"
                type="text"
                placeholder="We want to know a little bit about your history, What size/scale has your organisation be worming to in the past? 500 words"
              />
              <label for="evidence">What is the evidence of need?</label>
              <textarea
                id="evidence"
                type="text"
                placeholder="How can you prove that what you are applying for is needed in the community or location where you are applying. "
              />
              <label for="whyinvest">Why should we invest in you?</label>
              <textarea
                id="whyinvest"
                type="text"
                placeholder="In less than 200 words, sell your business, idea or innovation to us"
              />
			  <label for="fundsgiven">How will you handle the funds given to you?</label>
              <textarea
                id="fundsgiven"
                type="text"
                placeholder="In less than 200 words, kindly describe how you’ll make use of the funds given to you."
              />
            </form>
          </Dropdown>
          <FormLink to="/preview">
            <FormButton>Preview</FormButton>
          </FormLink>
          <FormSubmit to="/confirmapplication">
            <FormButton>Submit</FormButton>
          </FormSubmit>
          <ProgressBar now={now} />
        </ApplyForm>
      </Container>
    </Apply>
  );
};

export default ApplicationThreeHome;
