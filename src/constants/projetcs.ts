export type Project = {
  title: string;
  description: string;
  image: string;
  githubLink: string;
  liveLink?: string;
  techs: string[];
};

const projects: Project[] = [
  {
    title: "Tsikonina",
    description:
      "A Laravel application for sharing Malagasy recipes, providing a simple and smooth experience.",
    image:
      "https://res.cloudinary.com/dcwqtktxm/image/upload/v1738740858/pexels-framed-by-rania-2454533_vxijfv.jpg",
    githubLink: "https://github.com/henintsoaheriniaina/Tsikonina",
    liveLink: "https://tsikoninamg.infinityfreeapp.com/",
    techs: ["Laravel", "TailwindCSS", "Alpine.js", "MySQL"],
  },
  {
    title: "Magisphère",
    description:
      "A social network for my university, allowing students to connect, share, and collaborate easily.",
    image:
      "https://res.cloudinary.com/dcwqtktxm/image/upload/v1741159313/umagis_hvbbwt.png",
    githubLink: "https://github.com/henintsoaheriniaina/Magisphere",
    liveLink: "https://magisphere.infinityfreeapp.com/",
    techs: ["Laravel", "TailwindCSS", "Alpine.js", "Pusher", "MySQL"],
  },
  {
    title: "PowerUp",
    description:
      "A mobile app for purchasing gaming gear, featuring cart management and smooth animations.",
    image:
      "https://res.cloudinary.com/dcwqtktxm/image/upload/v1741153399/powerup_f3zfqa.png",
    githubLink: "https://github.com/henintsoaheriniaina/PowerUp",
    techs: ["React Native", "Redux Toolkit", "TypeScript", "Moti"],
  },
];

export default projects;
