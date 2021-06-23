import { Container } from "../../globalStyles";
import React from 'react'
import Select from 'react-select'
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
} from "./ApplicationOneHome.elements";

const optionsSize = [
	{ value: 'foodandagric', label: 'Food and Agric' },
  { value: 'it', label: 'IT' },
  { value: 'fintech', label: 'Fin Tech' },
  { value: 'fashion', label: 'Fashion' },
  { value: 'films', label: 'Film and Movies' },
  { value: 'education', label: 'Education' },
]

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

const ApplicationOneHome = ({ data, setOrdered }) => {
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
              options={optionsSize}
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
              options={optionsSize}
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
              options={optionsSize}
              theme={customTheme}
              className="mt-3"
              placeholder="Select a Category"
              autoFocus
            />
          </ADropdown>
          <FormLink to='/'>
            <FormButton>
              Continue
            </FormButton>
          </FormLink>
        </ApplyForm>
      </Container>
    </Apply>
  );
};

export default ApplicationOneHome;




        