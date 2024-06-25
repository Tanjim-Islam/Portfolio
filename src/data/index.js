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
    id: "education",
    title: "Education",
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
      "Developed responsive and visually appealing interfaces using <span style='color: white;'> HTML, CSS, JavaScript, React, and Vue. </span>",
      "Collaborated with designers and backend developers to enhance user experience.",
      "Implemented <span style='color: white;'> web performance optimization </span> techniques for faster load times.",
      "Contributed to code reviews and the development of reusable components.",
    ],
  },
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

