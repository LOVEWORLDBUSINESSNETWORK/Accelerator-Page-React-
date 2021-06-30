import { Container } from "../../globalStyles";
import React from "react";
import { ProgressBar } from "react-bootstrap";
import Select from "react-select";
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

const ApplicationTwoHome = ({ now, states, country }) => {

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
              <input
                id="bizname"
                type="text"
                placeholder="What is the name of your Business/Innovation?"
              />
              <label for="phonenumber">Phone Number</label>
              <input
                id="phonenumber"
                type="integer"
                placeholder="Enter your Phone Number"
              />
              <label for="address">Address</label>
              <input
                id="address"
                type="text"
                placeholder="Address of Residence"
              />
              <div id="countrydiv">
                <label for="country">Select your Country of Residence</label>
                <Select
                id="country"
                options={country}
                theme={customTheme}
                placeholder="Select your Country"
                />
              </div>
              <div id="statediv">
                <label for="state">State</label>
                <Select
                id="state"
                options={states}
                theme={customTheme}
                placeholder="State"
                />
              </div>
            </form>
          </Dropdown>
          <FormLink to="/apply">
            <FormButton>Previous</FormButton>
          </FormLink>
          <FormLink to="/applicationthree">
            <FormButton>Continue</FormButton>
          </FormLink>
          <ProgressBar now={now} />
        </ApplyForm>
      </Container>
    </Apply>
  );
};

export default ApplicationTwoHome;
