import styled from "styled-components";

export const NavigationBarWrapper = styled.header`
  background: #fff;
  display: flex;
  box-shadow: 0 2px 92px #00000012;
  justify-content: space-between;
`;

export const NavigationLeft = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  cursor: pointer;

  a {
    text-transform: uppercase;
    color: #000;
    padding: 0 10px;
    font-size: 14px;
    font-weight: 700;
    line-height: 73px;
    display: block;
    text-decoration: none;
  }

  li:first-of-type {
    padding-left: 2.4rem;
    padding-right: 2.4rem;
    background-color: orange;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    margin-right: 1rem;
  }

  i {
    font-size: 17px;
  }
`;

export const NavigationRight = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 2rem;
`;

export const NavButtonWrapper = styled.div`
  text-align: center;
  width: 100%;
`;

export const NavButton = styled.a`
  border: 0;
  border-radius: 50px;
  font-size: 14px;
  background-color: orange;
  line-height: 35px;
  font-weight: 500;
  padding: 10px 29px;
  padding-right: 6px;
  cursor: pointer;
  text-decoration: none;
  color: #000;
  margin: 18px 18px 0 5px;

  span {
    padding-right: 8px;
  }

  li:before {
    width: 2.4rem;
    height: 2.4rem;
    margin: 0 1rem;
  }

  i {
    padding: 13px 7px;
    background: #fff;
    border-radius: 50%;
  }
`;
