import { IconType } from "react-icons";
import {
  SiAlpinedotjs,
  SiExpress,
  SiGithub,
  SiLaravel,
  SiReact,
  SiReacthookform,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
  SiZod,
} from "react-icons/si";

export type Skill = {
  name: string;
  icon: IconType;
  link: string;
};

const skills: Skill[] = [
  {
    name: "Express.js",
    icon: SiExpress,
    link: "https://expressjs.com/",
  },
  {
    name: "Vue.js",
    icon: SiVuedotjs,
    link: "https://vuejs.org/",
  },
  {
    name: "Laravel",
    icon: SiLaravel,
    link: "https://laravel.com/",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "React / React Native",
    icon: SiReact,
    link: "https://react.dev/",
  },
  {
    name: "TailwindCSS",
    icon: SiTailwindcss,
    link: "https://tailwindcss.com/",
  },
  {
    name: "Alpine.js",
    icon: SiAlpinedotjs,
    link: "https://alpinejs.dev/",
  },
  {
    name: "Redux Toolkit",
    icon: SiRedux,
    link: "https://redux-toolkit.js.org/",
  },
  {
    name: "React Hook Form",
    icon: SiReacthookform,
    link: "https://react-hook-form.com/",
  },
  {
    name: "Zod",
    icon: SiZod,
    link: "https://zod.dev/",
  },

  {
    name: "Git & GitHub",
    icon: SiGithub,
    link: "https://github.com/",
  },
];

export default skills;
