import React from "react";
import {
  CodeSkill,
  DesignSkill,
  SkillExp,
  SkillPercentage,
  SkillProgressionStyle,
} from "./SkillProgressionStyle";
import SectionTitle from "../SectionTitle/SectionTitle";

const SkillProgression = () => {
  return (
    <SkillProgressionStyle>
      <DesignSkill>
        <SectionTitle title="Design Skill" />
        <ul>
          <li>PhotoShop</li>
          <SkillPercentage>
            <SkillExp />
          </SkillPercentage>
          <li>PhotoShop</li>
          <SkillPercentage>
            <SkillExp />
          </SkillPercentage>
          <li>PhotoShop</li>
          <SkillPercentage>
            <SkillExp />
          </SkillPercentage>
        </ul>
      </DesignSkill>
      <CodeSkill>
        <SectionTitle title="Code Skill" />
        <ul>
          <li>PhotoShop</li>
          <SkillPercentage>
            <SkillExp />
          </SkillPercentage>
          <li>PhotoShop</li>
          <SkillPercentage>
            <SkillExp />
          </SkillPercentage>
          <li>PhotoShop</li>
          <SkillPercentage>
            <SkillExp />
          </SkillPercentage>
        </ul>
      </CodeSkill>
    </SkillProgressionStyle>
  );
};

export default SkillProgression;
