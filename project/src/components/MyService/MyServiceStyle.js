import styled from "styled-components";

export const MyServiceWrapper = styled.div`
  padding: 50px 15px;
`;

export const ServiceColumnWrapper = styled.div`
  width: 25%;
  min-height: 186px;
  
  span {
    font-size: 14px;
    font-weight: 500;
    line-height: 30px;
  }

  p {
    margin: 0;
    color: #989898;
    font-weight: 400;
    line-height: 18px;
  }
`;

export const ServiceColumn = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 48px #04060414;
  padding: 2rem;
`;

export const ServiceIcon = styled.div`
  i {
    margin-bottom: 1.5rem;
  }
  i:before {
    font-size: 4.4rem;
  }
`;
