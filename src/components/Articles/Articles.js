import React from "react";
import { Container } from "../../globalStyles";
import {
  Articls,
  ArticleTitle,
  ArticleRow,
  ArticleColumn,
  ArticleHead,
  ArticleDescription,
  ArticleLink,
  ArticleIcon,
  ArticleWrapper,
  Img
} from "../Articles/Articles.elements";
import articleImage from "../../images/article1.png";
import articlebg from "../../images/articlebg.jpg";

const Articles = ( {TopLine, Description} ) => {
  return (
    <>
      <Articls style={{
              backgroundImage: `url(${articlebg}`,
              backgroundRepeat: "no-repeat",
              width: "1440px",
              height: "501.71px",
            }}>
        <Container>
          <ArticleTitle>ARTICLES</ArticleTitle>
          <ArticleRow>
            <ArticleColumn>
              <ArticleWrapper>
                <Img src={articleImage} />
              </ArticleWrapper>
            </ArticleColumn>
            <ArticleColumn>
              <ArticleHead TopLine={TopLine}>Questionnaire Modelling</ArticleHead>
              <ArticleDescription Description={Description}>
                How to draft questionnaire to get the best out information from your clients.  Questions  are a  neccessity to dealing with customers.
              </ArticleDescription>
              <ArticleLink to="/">
                Read More <ArticleIcon />
              </ArticleLink>
            </ArticleColumn>
          </ArticleRow>
        </Container>
      </Articls>
    </>
  );
};

export default Articles;
