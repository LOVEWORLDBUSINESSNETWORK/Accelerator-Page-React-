import { Container } from "../../globalStyles";
import React from "react";
import Select from "react-select";
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

const ApplicationTwoHome = ({ now, choice }) => {

  return (
    <Apply>
      <Container>
        <ApplyForm>
          <Label>
            <FormTitle>Section Two</FormTitle>
            <FormDescription>
              Business or Innovation Information
            </FormDescription>
          </Label>
          <Dropdown>
            <form>
              <label for="bizname">Business or Innovation Name</label>
              <input id="bizname" type="text" placeholder="What is the name of your Business/Innovation?"/>
              <label for="phonenumber">Phone Number</label>
              <input id="phonenumber" type="text" placeholder="Enter your Phone Number"/>
              <label for="address">Address</label>
              <input id="address" type="text" placeholder="Address of Residence"/>
              <Select 
              options={choice}
              theme={customTheme}
              className="mt-3 country"
              placeholder="Select a Category"
              autoFocus
              />
            </form>
          </Dropdown>
          <FormLink to="/apply">
            <FormButton>Previous</FormButton>
          </FormLink>
          <FormLink to="/">
            <FormButton>Continue</FormButton>
          </FormLink>
          <ProgressBar now={now} />
        </ApplyForm>
      </Container>
    </Apply>
  );
};

export default ApplicationTwoHome;
