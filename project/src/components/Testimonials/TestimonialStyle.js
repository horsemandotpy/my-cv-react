import styled, { keyframes } from "styled-components";
import { RowDisplayWrapper } from "../StyleJS/StyleJS";

export const TestimonialWrapper = styled.div`
  margin-bottom: 3rem;
  overflow: hidden;
`;

export const CardContainer = styled.div`
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 0 48px #04060414;
  flex-basis: 300px;
  flex-shrink: 0;
`;

export const CardTop = styled.div`
  display: flex;
  gap: 1rem;

  img {
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
  }
`;

const rotate = keyframes`
  5% {
    transform: translateX(-300px);
  }
  20% {
    transform: translateX(-600px);
  }
  50% {
    transform: translateX(-900px);
  }
  70% {
    transform: translateX(-1200px);
  }
  90% {
    transform: translateX(-1500px);
  }
  100% {
  transform: translateX(0px)
`;

export const TestimonialRow = styled.div`
  max-width: 5400px;
  display: flex;
  padding: 1.5rem;
  animation: ${rotate} 40s ease-in-out infinite;
  transition: all 1s ease-in-out;
  margin-left: ${(props) => `${props?.number}px`};
`;

export const CarouselControlWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const CarouselButton = styled.div`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  content: ".";
  color: orange;
  background: orange;
  cursor: pointer;

  &:hover {
    background: lightpink;
    color: lightpink;
  }
`;
