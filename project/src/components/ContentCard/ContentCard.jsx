import { ContentCardWrapper } from "./ContentCardStyle";
import { Outlet } from "react-router-dom";

const ContentCard = () => {
  return (
    <ContentCardWrapper>
      <Outlet />
    </ContentCardWrapper>
  );
};

export default ContentCard;
