import styled from "styled-components";

export const RowDisplayWrapper = styled.div`
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: flex;
  margin-top: calc(-1 * var(--bs-gutter-y));
  margin-right: calc(-0.5 * var(--bs-gutter-x));
  margin-left: calc(-0.5 * var(--bs-gutter-x));

  & > * {
    max-width: 100%;
    padding-right: calc(var(--bs-gutter-x) * 0.5);
    padding-left: calc(var(--bs-gutter-x) * 0.5);
    margin-top: var(--bs-gutter-y);
  }
`;

export const TreeOfInfor = styled.ul`
  padding: 0;
  margin: 0 auto;
  position: relative;
  list-style: none;
  margin: 15px 0 8px 35px;
`;

export const InforPointer = styled.li`
  border-left: 2px solid #eee;
  padding-bottom: 23px;
  padding-left: 20px;
  font-size: 14px;

  &:first-of-type {
    max-width: 100%;
    position: relative;
    padding-bottom: 30px;
  }

  &:first-of-type::before {
    display: none;
  }

  &:first-of-type i {
    color: #000;
    position: absolute;
    top: -25px;
    left: -20px;
    font-size: 15px;
  }

  &:first-of-type i::before {
    background-color: orange;
    padding: 12px;
    border-radius: 50%;
    height: 12px;
    width: 12px;
  }

  &:before {
    content: "";
    display: block;
    width: 8px;
    height: 8px;
    background-color: #fff;
    border: 2px solid orange;
    border-radius: 50%;
    position: absolute;
    left: -3px;
    font-size: 8px;
    font-weight: 400;
  }

  &:last-of-type {
    border: 0;
  }
`;
