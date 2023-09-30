import { MainContentWrapper } from "./MainContentStyle";
import NavigationBar from "../NavigationBar/NavigationBar";
import ContentCard from "../ContentCard/ContentCard";
import Footer from "../Footer/Footer";

const MainContent = () => {
  return (
    <MainContentWrapper>
      <NavigationBar />
      <ContentCard />
      <Footer />
    </MainContentWrapper>
  );
};

export default MainContent;
