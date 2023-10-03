import styled from "styled-components";

export const PortfolioWrapper = styled.div`
  padding: 15px;
  background-color: #fff;
  box-shadow: 0 2px 92px #00000012;
  margin-top: 3rem;
  border-radius: 6px;
`;

export const ButtonPortfolioWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  & > a {
    cursor: pointer;
    font-size: 1.5rem;
  }

  & > a:hover {
    color: orange;
  }

  & > a.active {
    color: orange;
  }
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding-top: 6rem;
`;

export const ProjectWrapper = styled.div`
  padding: 1.5rem;
`;

export const ProjectStyleBox = styled.div`
  background-color: #fff;
  box-shadow: 0 2px 92px #00000012;
  position: relative;
  cursor: pointer;
  border-radius: 6px;

  &:hover i {
    color: #fff;
    transition: all 0.3s;
    opacity: 0.9;
    transform: translateY(-2.5rem);
    background: orange;
  }
`;

export const IconHoverBox = styled.div`
  i {
    text-align: center;
    color: #fff;
    position: absolute;
    top: 45%;
    left: 40%;
    font-size: 1.8rem;
    transform: translateY(5rem);
    opacity: 0;
    background: orange;
    padding: 2rem;
    border-radius: 50%;
  }
`;

export const CaptionBox = styled.div`
  padding: 1.4rem;
`;
