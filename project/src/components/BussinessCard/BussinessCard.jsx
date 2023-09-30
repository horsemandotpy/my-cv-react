import {
  BussinessCardButton,
  BussinessCardButtonWrapper,
  BussinessCardImagine,
  BussinessCardWrapper,
  BussinessTitle,
  BussinessTitleBox,
} from "./BussinessCardStyle";
import henryPhoto from "../../assets/img/home/henry_avatar-my-cv.jpg";
import { InforPointer, TreeOfInfor } from "../StyleJS/StyleJS";

const BussinessCard = () => {
  return (
    <BussinessCardWrapper>
      <BussinessTitleBox>
        <BussinessTitle>Henry Rooney</BussinessTitle>
        <span>Creative Designer</span>
      </BussinessTitleBox>
      <BussinessCardImagine>
        <img src={henryPhoto} alt="Henry Rooney photo" />
      </BussinessCardImagine>
      <TreeOfInfor>
        <InforPointer>
          <i className="fa-solid fa-glasses"></i>
        </InforPointer>
        <InforPointer>
          <span>Name:</span> Henry Rooney
        </InforPointer>
        <InforPointer>
          <span>Birthday:</span> 06 December 1987
        </InforPointer>
        <InforPointer>
          <span>Job:</span> Freelancer
        </InforPointer>
        <InforPointer>
          <span>Email:</span> henry@domain.com
        </InforPointer>
        <InforPointer>
          <span>Skype:</span> henryrooney85
        </InforPointer>
      </TreeOfInfor>

      <BussinessCardButtonWrapper>
        <BussinessCardButton>
          <span>Download CV</span>
          <i className="fa-solid fa-download"></i>
        </BussinessCardButton>
      </BussinessCardButtonWrapper>
    </BussinessCardWrapper>
  );
};

export default BussinessCard;
