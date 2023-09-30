import SectionTitle from "../SectionTitle/SectionTitle";
import { RowDisplayWrapper } from "../StyleJS/StyleJS";
import {
  MyServiceWrapper,
  ServiceColumn,
  ServiceColumnWrapper,
  ServiceIcon,
} from "./MyServiceStyle";

const MyService = () => {
  return (
    <MyServiceWrapper>
      <SectionTitle title="My Services" />
      <RowDisplayWrapper>
        <ServiceColumnWrapper>
          <ServiceColumn>
            <ServiceIcon>
              <i className="fa-solid fa-code"></i>
            </ServiceIcon>
            <span>Web Development</span>
            <p>I have been working on web design for 9 years.</p>
          </ServiceColumn>
        </ServiceColumnWrapper>

        <ServiceColumnWrapper>
          <ServiceColumn>
            <ServiceIcon>
              <i className="fa-solid fa-code"></i>
            </ServiceIcon>
            <span>Web Development</span>
            <p>I have been working on web design for 9 years.</p>
          </ServiceColumn>
        </ServiceColumnWrapper>
        <ServiceColumnWrapper>
          <ServiceColumn>
            <ServiceIcon>
              <i className="fa-solid fa-code"></i>
            </ServiceIcon>
            <span>Web Development</span>
            <p>I have been working on web design for 9 years.</p>
          </ServiceColumn>
        </ServiceColumnWrapper>
        <ServiceColumnWrapper>
          <ServiceColumn>
            <ServiceIcon>
              <i className="fa-solid fa-code"></i>
            </ServiceIcon>
            <span>Web Development</span>
            <p>I have been working on web design for 9 years.</p>
          </ServiceColumn>
        </ServiceColumnWrapper>
      </RowDisplayWrapper>
    </MyServiceWrapper>
  );
};

export default MyService;
