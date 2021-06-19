import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkWrapper,
  FooterLinksItems,
  FooterLinkTitle,
  FooterLink,
  FooterText,
  IdMedia,
  IdWrap,
  IdCopyright,
  SocialIconLink,
  SocialIconWrapper,
  IdCreation,
  IdName,
  IdNameSub
} from "./Footer.elements";
import footerbg from "../../images/footerbg.png"

const Footer = () => {
  return (
    <FooterContainer style={{
      backgroundImage: `url(${footerbg})`,
      backgroundRepeat: "no-repeat",
      width: "100%",
      height: "700px",
    }}>
      <FooterLinksContainer>
        <FooterLinkWrapper>
            <FooterText>
              Connect on the loveworld next
              Platform and engage, pitch your
              business ideas and exhibit your 
              products. 
            </FooterText>
            <SocialIconWrapper>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="/"
                target="_blank"
                aria-label="Youtube"
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                <FaLinkedin />
              </SocialIconLink>
            </SocialIconWrapper>
        </FooterLinkWrapper>
        <FooterLinksWrapper>
          <FooterLinksItems>
            <FooterLinkTitle>LOVEWORLD NEXT</FooterLinkTitle>
            <FooterLink to="/sign-up">About</FooterLink>
            <FooterLink to="/">Terms of Use</FooterLink>
            <FooterLink to="/">Privacy Policy</FooterLink>
            <FooterLink to="/">How it works</FooterLink>
            <FooterLink to="/">Contact Us</FooterLink>
          </FooterLinksItems>
          <FooterLinksItems>
            <FooterLinkTitle>SUPPORT</FooterLinkTitle>
            <FooterLink to="/sign-up">Support Center</FooterLink>
            <FooterLink to="/">24hr Service</FooterLink>
            <FooterLink to="/">Quick Chat</FooterLink>
          </FooterLinksItems>
          <FooterLinksItems>
            <FooterLinkTitle>CONTACT</FooterLinkTitle>
            <FooterLink to="/sign-up">Whatspp</FooterLink>
            <FooterLink to="/">24 NYC Road, USA</FooterLink>
          </FooterLinksItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <IdMedia>
        <IdWrap>
          <IdCopyright>
            Copyright 2021 loveworldnext
          </IdCopyright>
          <IdCreation>
            <IdName>
              Created by: 
              <IdNameSub> Loveworld Next</IdNameSub>
            </IdName>
          </IdCreation>
        </IdWrap>
      </IdMedia>
    </FooterContainer>
  );
};


export default Footer;
