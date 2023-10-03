import React from "react";
import {
  ButtonPortfolioWrapper,
  CaptionBox,
  GridWrapper,
  IconHoverBox,
  PortfolioWrapper,
  ProjectStyleBox,
  ProjectWrapper,
} from "./PortfolioStyle";
import SectionTitle from "../SectionTitle/SectionTitle";
import projectImg from "../../assets/img/portfolio/amazon-travel.jpg";
import { useState } from "react";

const Portfolio = () => {
  const [category, setCategory] = useState([
    "Web Design",
    "Web Design",
    "Web Design",
    "Motion Graphic",
    "Motion Graphic",
    "Illustration",
    "Illustration",
    "Illustration",
    "Photography",
  ]);

  const [filteredCategory, setFilteredCategory] = useState(category);

  const categoryList = [
    "All",
    "Web Design",
    "Motion Graphic",
    "Illustration",
    "Photography",
  ];

  const [tabActive, setTabActive] = useState("All");

  const handleFilter = (cate) => {
    if (cate === "All") {
      setFilteredCategory(category);
      setTabActive(cate);
    } else {
      const filteredCate = category.filter((category) => category === cate);
      setFilteredCategory(filteredCate);
      setTabActive(cate);
    }
  };

  return (
    <PortfolioWrapper>
      <SectionTitle title="Portfolio" />
      <ButtonPortfolioWrapper>
        {categoryList.map((cate, index) => {
          return (
            <a
              key={index}
              onClick={() => handleFilter(cate)}
              className={cate === tabActive ? `active` : undefined}
            >
              {cate}
            </a>
          );
        })}
      </ButtonPortfolioWrapper>
      <GridWrapper>
        {filteredCategory.map((name, index) => {
          return (
            <ProjectWrapper key={index}>
              <ProjectStyleBox>
                <IconHoverBox>
                  <i className="fa fa-clone"></i>
                </IconHoverBox>
                <img src={projectImg} alt="" />
                <CaptionBox>
                  <h6>{name}</h6>
                  <h6>Project Description</h6>
                </CaptionBox>
              </ProjectStyleBox>
            </ProjectWrapper>
          );
        })}
      </GridWrapper>
    </PortfolioWrapper>
  );
};

export default Portfolio;
