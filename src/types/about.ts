import { IconType } from "react-icons";


export interface JourneyItem {
  period: string;
  title: string;
  description: string;
  icon: IconType;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: IconType;
  tags: string[];
}

export interface SkillGroup {
  title: string;
  description: string;
  icon: IconType;
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description: string;
}
