import React from "react";
import { ResumeWrapper, WorkHistoryWrapper } from "./ResumeStyle";
import SectionTitle from "../SectionTitle/SectionTitle";
import {
  InforPointer,
  RowDisplayWrapper,
  TreeOfInfor,
} from "../StyleJS/StyleJS";
import Clients from "../Clients/Clients";
import Testimonials from "../Testimonials/Testimonials";

const Resume = () => {
  return (
    <ResumeWrapper>
      <SectionTitle title="Resume" />
      <RowDisplayWrapper>
        <WorkHistoryWrapper>
          <TreeOfInfor>
            <InforPointer>
              <i className="fa-solid fa-suitcase fa-xs"></i>
              <SectionTitle title="Working History" />
            </InforPointer>
            <InforPointer>
              <h4>Art Director - Facebook Inc</h4>
              <span>2010 - present</span>
              <p>
                Expenses as material breeding insisted building to in. Continual
                so distrusts pronounce by unwilling listening. Thing do taste on
                we manor.
              </p>
            </InforPointer>

            <InforPointer>
              <h4>Senior Designer - Google</h4>
              <span>2008 - 2010</span>
              <p>
                So insisted received is occasion advanced honoured. Among ready
                to which up. Attacks smiling and may out assured moments man
                nothing outward.
              </p>
            </InforPointer>

            <InforPointer>
              <h4>Junior Designer - Creative Shake</h4>
              <span>2005 - 2008</span>
              <p>
                Excited him now natural saw passage offices you minuter. At by
                asked being court hopes. Farther so friends am to detract.
              </p>
            </InforPointer>
          </TreeOfInfor>
        </WorkHistoryWrapper>
        <WorkHistoryWrapper>
          <TreeOfInfor>
            <InforPointer>
              <i className="fa-solid fa-graduation-cap fa-xs"></i>
              <SectionTitle title="Education History" />
            </InforPointer>
            <InforPointer>
              <h4>Abc University of Los Angeles</h4>
              <span>2004 - 2009</span>
              <p>
                Expenses as material breeding insisted building to in. Continual
                so distrusts pronounce by unwilling listening. Thing do taste on
                we manor.
              </p>
            </InforPointer>

            <InforPointer>
              <h4>Drawing Course</h4>
              <span>2003 - 2004</span>
              <p>
                So insisted received is occasion advanced honoured. Among ready
                to which up. Attacks smiling and may out assured moments man
                nothing outward.
              </p>
            </InforPointer>

            <InforPointer>
              <h4>Abc High School</h4>
              <span>2000 - 2003</span>
              <p>
                Excited him now natural saw passage offices you minuter. At by
                asked being court hopes. Farther so friends am to detract.
              </p>
            </InforPointer>
          </TreeOfInfor>
        </WorkHistoryWrapper>
      </RowDisplayWrapper>
      <Clients></Clients>
      <Testimonials></Testimonials>
    </ResumeWrapper>
  );
};

export default Resume;
