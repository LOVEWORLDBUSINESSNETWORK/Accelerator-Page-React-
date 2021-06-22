import styled from "styled-components";
import { FaMagento } from "react-icons/fa";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FooterSubscription = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 24px;
  padding: 24px;
  color: #fff;
`;

export const FooterSubHeading = styled.p`
  font-family: "Trebuchet MS", "Lucide Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  margin-bottom: 24px;
  font-size: 24px;
`;

export const FooterSubText = styled.p`
  margin-bottom: 24px;
  font-size: 20px;
`;

export const Form = styled.form`
	display: flex;
	justify-content: center;
	align-items; center;

	@media screen and (max-width: 820px) {
		flex-direction: column;
		width: 80%;
	}
`;

export const FormInput = styled.input`
  padding: 10px 20px;
  border-radius: 2px;
  margin-right: 10px;
  outline: none;
  border: none;
  font-size: 16px;
  border: 1px solid #fff;

  &::placeholder {
    color: #242424;
  }

  @media screen and (max-width: 820px) {
    width: 100%;
    margin: 0 0 16px 0;
  }
`;

export const FooterLinksContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: center;

  @media screen (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  width: 300px;
  margin: 100 200px 0 0;
`;

export const FooterLinksItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 210px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h2`
  margin-bottom: 16px;
  font-weight: 600;
  font-size: 23px;
  color: #ffc947;
`;

export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 1.5rem;
  font-size: 18px;

  &:hover {
    color: #0467fb;
    transition: 0.3s ease-out;
  }
`;

export const FooterText = styled.p`
  display: flex;
  color: #545454;
  font-size: 18px;
  width: 300px;
`;

export const SocialIconLink = styled(Link)`
  color: #fff;
  margin-bottom: 1rem;
  width: 30px;
`;

export const SocialIconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 150px;
`;

export const IdMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const IdWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const IdCopyright = styled.p`
  color: #545454;
  justify-self: start;
  font-size: 14px;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const SocialIcon = styled(FaMagento)`
  margin-right: 10px;
`;

export const IdCreation = styled.div`
  display: flex;
  justify-self: end;
  justify-content: space-between;
  align-items: center;
  width: 200px;
`;

export const IdName = styled.div`
  color: #545454;
  font-size: 14px;
  width: 261px;
`;

export const IdNameSub = styled.p`
  color: #fff;
  font-weight: 600;
  display: inline;
`;
