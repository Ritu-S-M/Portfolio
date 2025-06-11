//  icons
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

// skills images
import SkillImg1 from "/skills/html.svg";
import SkillImg2 from "/skills/css.svg";
import SkillImg3 from "/skills/javascript.svg";
import SkillImg4 from "/skills/python.svg";
import SkillImg5 from "/skills/reactjs.svg";
import SkillImg6 from "/skills/tailwind.svg";
import SKillImg7 from "/skills/framermotion.svg";
import SkillImg8 from "/skills/git.svg";

// navigation
export const navigation = [
  {
    name: "home",
    href: "home",
  },
  {
    name: "about",
    href: "about",
  },
  {
    name: "projects",
    href: "projects",
  },
  {
    name: "contact",
    href: "contact",
  },
];

// social
export const social = [
  {
    icon: <FiGithub />,
    href: "https://github.com/Ritu-S-M",
    color: "text-white",
    colorHover: "hover:text-gray-500",
  },
  {
    icon: <FiLinkedin />,
    href: "https://www.linkedin.com/in/ritu-mathad-206820291/ ",
    color: "text-blue-500",
    colorHover: "hover:text-blue-900",
  },
  {
    icon: <FiMail />,
    href: "mailto:ritumathad@gmail.com",
    color: "text-red-500",
    colorHover: "hover:text-red-700",
  }
];

// skill
export const skills = [
  {
    image: SkillImg1,
    name: "HTML",
  },
  {
    image: SkillImg2,
    name: "CSS",
  },
  {
    image: SkillImg3,
    name: "JavaScript",
  },
  {
    image: SkillImg4,
    name: "Python",
  },
  {
    image: SkillImg5,
    name: "ReactJS",
  },
  {
    image: SkillImg6,
    name: "Tailwind CSS",
  },
  {
    image: SKillImg7,
    name: "Framer Motion",
  },
  {
    image: SkillImg8,
    name: "Git",
  },
];