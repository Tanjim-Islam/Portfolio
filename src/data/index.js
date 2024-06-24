import {
  homiestay,
  fakenews,
  yolov8,
} from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Hero",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Invicta Solution Limited",
    date: "June 2024 - Present",
    details: [
      "Developed responsive and visually appealing interfaces using HTML, CSS, JavaScript, React, and Vue.",
      "Collaborated with designers and backend developers to enhance user experience.",
      "Implemented web performance optimization techniques for faster load times.",
      "Contributed to code reviews and the development of reusable components.",
    ],
  },
  // {
  //   title: "Software Developer",
  //   company_name: "Indie",
  //   date: "2019 - 2023",
  //   details: [
  //     "Developed and delivered custom interdisciplinary coding portfolio for clients including <span style='color: white;'>Nvidia, Hostinger, and Amazon</span>.",
  //     "<span style='color: white;'>Designed and developed innovative</span> AI applications and interactive websites.",
  //     "<span style='color: white;'>Managed full project lifecycle</span> from concept to deployment in successful and timely project completions.",
  //   ],
  // },
  // {
  //   title: "Software Engineer",
  //   company_name: "Prime 3",
  //   date: "2018 - 2019",
  //   details: [
  //     "Built custom enterprise applications for a <span style='color: white;'>Fortune 500 company</span> as a full-stack software engineer.",
  //     "Developed and maintained <span style='color: white;'>scalable backend services</span>, ensuring high availability for critical business applications.",
  //     "<span style='color: white;'>Collaborated with a team</span> to design and implement front-end interfaces.",
  //   ],
  // },
  // {
  //   title: "Computer Science",
  //   company_name: "ODU",
  //   date: "2015 - 2018",
  //   details: [
  //     "Built a <span style='color: white;'>computer science foundation</span> learning theory, computer architecture, and software engineering.",
  //     "Worked and interned at <span style='color: white;'>NASA and Norfolk Southern Railway</span> to gain practical experience in the field of data analysis.",
  //     "Acted as a member of the <span style='color: white;'>Association for Computing Machinery</span> (ACM).",
  //   ],
  // },
];

const portfolio = [
  {
    name: "Hand Sign Recognition with YOLOv8",
    description:
      "A GitHub repo with over 17,000 stars containing a curated list of free online courses from reputable universities that satisfy undergraduate computer science requirements.",
    image: yolov8,
  },
  {
    name: "Fake News Detection",
    description:
      "A newsletter with over 6,000 readers made for software developers to keep up with this rapidly evolving industry, with a sister platform in progress.",
    image: fakenews,
  },
  {
    name: "HomieStay",
    description:
      "HomieStay is a modern, clean, and user-friendly platform for hosting and connecting with people in need of temporary housing.",
    image: homiestay,
  },
];

export { experiences, portfolio };

