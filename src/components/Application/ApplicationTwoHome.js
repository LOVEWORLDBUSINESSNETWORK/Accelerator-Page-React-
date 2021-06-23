import { Container } from "../../globalStyles";
import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { useForm } from "react-hook-form";
import {
  Apply,
  ApplyForm,
  Label,
  FormTitle,
  FormDescription,
  FormLink,
  ADropdown,
  FormButton,
} from "./ApplicationHome.elements";


const ApplicationTwoHome = ({ now, data, setOrdered }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <Apply>
      <Container>
        <ApplyForm>
          <Label>
            <FormTitle>Section One</FormTitle>
            <FormDescription>
              Business or Innovation Information
            </FormDescription>
          </Label>
          <ADropdown>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input {...register("firstName")} />
              <input {...register("phoneNumber")} />
              <input {...register("address")} />
              <select {...register("state")}>
                <option value="female">female</option>
                <option value="male">male</option>
                <option value="other">other</option>
              </select>
              <input type="submit" />
            </form>
          </ADropdown>
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
