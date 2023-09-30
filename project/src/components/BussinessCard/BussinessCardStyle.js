import styled from "styled-components";

export const BussinessCardWrapper = styled.div`
  width: 25%;
  background: #fff;
  border-radius: 6px;
  box-shadow: 0 2px 92px #00000012;
`;

export const BussinessTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const BussinessTitle = styled.h5`
  font-weight: 700;
  font-size: 1.5rem;
`;

export const BussinessCardImagine = styled.figure`
  clip-path: polygon(0 9%, 100% 0, 100% 94%, 0% 100%);
  padding: 0;
  margin: 0;
  display: block;
  margin-top: 18px;
`;


export const BussinessCardButtonWrapper = styled.div`
  text-align: center;
  width: 100%;
  margin: 18px auto 30px;
`;

export const BussinessCardButton = styled.a`
  border: 0;
  border-radius: 50px;
  font-size: 14px;
  background-color: orange;
  line-height: 35px;
  font-weight: 500;
  padding: 13px 29px;
  padding-right: 6px;
  cursor: pointer;
  text-decoration: none;
  color: #000;
  margin: 18px auto 30px;

  span {
    padding-right: 8px;
  }

  i {
    padding: 8px;
    background: #fff;
    border-radius: 50%;
  }
`;
