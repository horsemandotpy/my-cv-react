import React from "react";
import { CardContainer, CardTop, TestimonialWrapper } from "./TestimonialStyle";
import SectionTitle from "../SectionTitle/SectionTitle";
import { RowDisplayWrapper } from "../StyleJS/StyleJS";
import LarryImg from "../../assets/img/resume/testimonials/larry.jpg";

const Testimonials = () => {
  return (
    <TestimonialWrapper>
      <SectionTitle title="Testimonials" />
      <RowDisplayWrapper>
        <CardContainer>
          <CardTop>
            <img src={LarryImg} />
            <div>
              <span>Jack Garrat</span>
              <span>Freelancer</span>
            </div>
          </CardTop>
          <hr />
          <div>
            <p>Grreat designer he make our work is so much easier</p>
          </div>
        </CardContainer>
        <CardContainer>
          <CardTop>
            <img src={LarryImg} />
            <div>
              <span>Jack Garrat</span>
              <span>Freelancer</span>
            </div>
          </CardTop>
          <hr />
          <div>
            <p>Grreat designer he make our work is so much easier</p>
          </div>
        </CardContainer>
        <CardContainer>
          <CardTop>
            <img src={LarryImg} />
            <div>
              <span>Jack Garrat</span>
              <span>Freelancer</span>
            </div>
          </CardTop>
          <hr />
          <div>
            <p>Grreat designer he make our work is so much easier</p>
          </div>
        </CardContainer>
      </RowDisplayWrapper>
    </TestimonialWrapper>
  );
};

export default Testimonials;
