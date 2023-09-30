import { HomePageWrapper } from "./HomePageStyle";
import BussinessCard from "../BussinessCard/BussinessCard";
import MainContent from "../MainContent/MainContent";
import Footer from "../Footer/Footer";

const HomePage = () => {
  return (
    <HomePageWrapper>
      <BussinessCard></BussinessCard>
      <MainContent></MainContent>
    </HomePageWrapper>
  );
};

export default HomePage;
