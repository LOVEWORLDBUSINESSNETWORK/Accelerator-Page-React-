import { Container } from "../../globalStyles";
import React from 'react'
import Select from 'react-select'
import { ProgressBar } from "react-bootstrap";
import makeAnimated from 'react-select/animated';
import {
  Apply, 
  ApplyForm,
  Label,
  FormTitle,
  FormDescription,
  FormNote,
  FromNoteImp,
  DropDownLabel,
  FormLink,
  ADropdown,
  FormButton
} from "./ApplicationHome.elements";

function customTheme(theme){
  return{
    ...theme,
    colors: {
      ...theme.colors,
      primary25: 'orange',
      primary: 'green',
    },
  };
}

const animatedComponents = makeAnimated();

const ApplicationOneHome = ({ now, data, setOrdered, category, choice, businessage }) => {
  return (
    <Apply>
      <Container>
        <ApplyForm>
          <Label>
            <FormTitle>Section One</FormTitle>
            <FormDescription>
              Select the category that best describes your business or
              Innovation
            </FormDescription>
            <FormNote>
              <FromNoteImp>Please note: &nbsp; </FromNoteImp>You are only alowed
              to tick just one box. for each Segment
            </FormNote>
          </Label>
          <ADropdown>
            <DropDownLabel>
              What category best describes your Business or Innovation?
            </DropDownLabel>
            <Select 
              components={animatedComponents}
              options={category}
              theme={customTheme}
              className="mt-3"
              placeholder="Select a Category"
              autoFocus
            />
          </ADropdown>
          <ADropdown>
            <DropDownLabel>
              Are you a business owner or Innovator?
            </DropDownLabel>
            <Select 
              options={choice}
              theme={customTheme}
              className="mt-3"
              placeholder="Select a Category"
              autoFocus
            />
          </ADropdown>
          <ADropdown>
            <DropDownLabel>
              Business Age
            </DropDownLabel>
            <Select 
              options={businessage}
              theme={customTheme}
              className="mt-3"
              placeholder="Select a Category"
              autoFocus
            />
          </ADropdown>
          <FormLink to='/applicationtwo'>
            <FormButton>
              Continue
            </FormButton>
          </FormLink>

          <ProgressBar variant='success' now={now} label={`${now}%`} animated />;

        </ApplyForm>
      </Container>
    </Apply>
  );
};

export default ApplicationOneHome;