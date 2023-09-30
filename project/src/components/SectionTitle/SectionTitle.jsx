import styled from "styled-components";

const Section = styled.div`
  padding: 0 3px;
  display: inline-block;
  position: relative;
  margin-bottom: 45px;
`;
const Title = styled.h2`
  font-size: 18px;
  font-weight: 600;
  position: relative;
`;
const SectionSpan = styled.span`
  opacity: 0.4;
  width: 100%;
  height: 7px;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: #ffb100 !important;
`;

// eslint-disable-next-line react/prop-types
const SectionTitle = ({ title  } ) => {
  return (
    <Section>
      <SectionSpan></SectionSpan>
      <Title>{title}</Title>
    </Section>
  );
};

export default SectionTitle;
