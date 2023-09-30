import AboutMe from "../AboutMe/AboutMe";
import MyService from "../MyService/MyService";
import SkillProgression from "../SkillProgression/SkillProgression";
import { AboutMeWrapper } from "./HomeContentStyle";

const HomeContent = () => {
  return (
    <AboutMeWrapper>
      <AboutMe />
      <MyService />
      <SkillProgression />
    </AboutMeWrapper>
  );
};

export default HomeContent;
