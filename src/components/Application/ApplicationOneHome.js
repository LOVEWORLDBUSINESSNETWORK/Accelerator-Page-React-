import React from "react";
import { Container } from "../../globalStyles";
import {
  Apply,
  ApplyForm,
  Label,
  FormTitle,
  FormDescription,
  FormNote,
  FromNoteImp,
  DropDownLabel,
  DropDownTog,
  DropDownToggle,
} from "./ApplicationOneHome.elements";
import { Dropdown } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";

const ApplicationOneHome = () => {
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
          <Dropdown>
            <DropDownLabel>
              What category best describes your Business or Innovation?
            </DropDownLabel>
            <DropdownToggle variant="success" id="dropdown-basic">
              <DropDownTog>Select a Category</DropDownTog>
            </DropdownToggle>

            <DropdownMenu>
              <DropdownItem href="#/action-1">Action</DropdownItem>
              <DropdownItem href="#/action-2">Another action</DropdownItem>
              <DropdownItem href="#/action-3">Something else</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </ApplyForm>
      </Container>
    </Apply>
  );
};

export default ApplicationOneHome;
