import styled from "styled-components";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";

export const Head = styled.div`
  margin-top: 50px;
  margin-left: 259px;
`;

export const PreviewHead = styled.div`
  font-weight: 600;
  font-size: 36px;
  line-height: 54px;
  display: flex;
  align-items: center;
  color: #000000;
  margin-bottom: 10px;
`;

export const Description = styled.p`

`;

export const Apply = styled.div`
  background-color: #fff8f2;
  border-radius: 20px;
  width: 923px;
  min-height: 889px;
  padding: 56px 104px;
  margin: 120px 259px;
`;

export const ApplyForm = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const Label = styled.div``;

export const Sections = styled.div``;

export const FormTitle = styled.div`
  font-weight: 600;
  font-size: 36px;
  line-height: 54px;
  display: flex;
  align-items: center;
  color: #000000;
  margin-bottom: 10px;
`;

export const FormDescription = styled.div`
  font-style: normal;
  font-weight: 200;
  font-size: 18px;
  line-height: 27px;
  display: flex;
  align-items: center;
  color: #000000;
  margin-bottom: 10px;
`;

export const FormNote = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  display: flex;
  align-items: center;
  color: #000000;
  margin-bottom: 65px;
`;

export const FromNoteImp = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 18px;
  display: flex;
  align-items: center;
  color: #000000;
`;

export const Dropdown = styled.div`
  margin-bottom: 45px;
  width: 715px;

  >form {
    font-weight: normal;

    >label {
      font-weight: normal;
      font-size: 18px;
      line-height: 27px;
      display: flex;
      align-items: center;
      color: #000000;
      margin-top: 20px;
      margin-bottom: 20px;
    }

    >input {
      width: 715px;
      height: 60px;
      background: #FFFFFF;
      box-shadow: 0px 5px 10px 1px rgba(232, 232, 232, 0.25);
      border-radius: 10px;
      border: none;
      outline: none;
      margin-bottom: 45px;
      padding-left: 30px;
      font-size: 18px;

      ::placeholder {
        font-size: 14px;
        line-height: 21px;
        display: flex;
        align-items: center;
        font-weight: 200;
        color: #000000;

      }
    }

    >textarea {
      width: 729px;
      height: 232px;
      right: 359px;
      top: 551px;
      background: #FFFFFF;
      box-shadow: 0px 0.888572px 13.3286px 1.77714px rgba(196, 196, 196, 0.25);
      border-radius: 5px;
      border: none;
      outline: none;
      padding-left: 30px;
      padding-right: 30px;
      padding-top: 20px;
      font-size: 16px;
    }

    >select#country {
      width: 347px;
      cursor: pointer;
      border-radius: 10px;
      border: none;
      outline: none;

      >option {
        background-color: #fff;
        line-height: 21px;
        align-items: center;
        font-weight: 200;
        color: #000000;

      }
    }
      >select#state {
      width: 347px;
      height: 60px;
      border-radius: 10px;
      padding-left: 30px;
      border: none;
      outline: none;

      >option {
        background-color: #fff;
        line-height: 21px;
        display: flex;
        align-items: center;
        font-weight: 200;
        color: #000000;
        }
      }

      >div {
        display: inline-block;
        width: 347px;
      }

      >div#statediv {
        margin-left: 21px;
      }
  }
`;

export const DropDownLabel = styled.div`
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  display: flex;
  align-items: center;
  color: #000000;
  margin-bottom: 10px;
`;

export const FormLink = styled(Link)`
  width: 154.28px;
  height: 43.7px;
  text-decoration: none;
  display: inline-block;
  margin: 0 auto;
`;

export const FormButton = styled.button`
  background: #fff;
  padding: 10px 40px;
  color: #000;
  font-size: 16px;
  line-height: 25px;
  outline: none;
  border: none;
  cursor: pointer;
  box-shadow: 0px 2px 5px 2px rgba(196, 196, 196, 0.25);
  border-radius: 6.62136px;

  &:hover {
    transition: all 0.3s ease-out;
    background: #ffc947;
  }
`;

export const FormSubmit = styled(Link)`
  width: 154.28px;
  height: 43.7px;
  text-decoration: none;
  display: inline-block;
  margin: 0 auto;
`;

export const Forms = styled(Form)`
  font-size: 18px;
  line-height: 27px;
  display: block;
  align-items: center;
  color: red;
`;

export const Confirmation = styled.div`
  margin: 260px auto;
  text-align: center;

  >img {
      width: 73px;
      margin: 10px;
  }

  >p {
    display: block;
    font-weight: bold;
    font-size: 48px;
    line-height: 72px;
    color: #000000;
  }
`;

export const Back = styled(Link)`
  display: inline-block;
  text-align: center;
  line-height: 72px;
  margin-top: 60px;
  padding: 10px 30px;
  font-size: 24px;
  font-weight: bold;
  color: #FFC947;
  text-decoration: none;
  border: 2px solid #FFC947;
  border-radius: 5px;
  background-color: #fff;
  width: 400px;
  transition: 0.5s ease all;

  &:hover {
    background-color: #ffc947;
    color: #fff;
  }
`