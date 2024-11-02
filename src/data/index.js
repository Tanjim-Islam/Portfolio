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
  {
    title: "Freelance Data Analyst",
    company_name: "Upwork",
    date: "May 2022 - May 2023",
    details: [
      "Performed data analysis and visualization using <span style='color: white;'> Python, SQL, and Tableau. </span>",
      "Created custom dashboards and reports to help clients make data-driven decisions.",
      "Conducted data cleaning, transformation, and validation for high data accuracy.",
    ],
  },
  {
    title: "Independent Front-End Developer",
    company_name: "Self-employed",
    date: "September 2021 - March 2023",
    details: [
      "Built and maintained responsive websites using <span style='color: white;'> HTML, CSS, JavaScript, and React. </span>",
      "Collaborated with clients on Fiverr to deliver custom web solutions tailored to their needs.",
      "Optimized websites for SEO and performance, ensuring fast load times and mobile compatibility.",
    ],
  },
  {
    title: "Contract Machine Learning Engineer",
    company_name: "Upwork",
    date: "June 2023 - December 2023",
    details: [
      "Developed machine learning models using <span style='color: white;'> Python, Scikit-Learn, and TensorFlow. </span>",
      "Designed data pipelines for efficient data processing and model training.",
      "Collaborated with clients on Upwork to deploy ML models and provided documentation for maintenance.",
    ],
  },
  {
    title: "Independent UI/UX Designer and Front-End Developer",
    company_name: "Self-employed",
    date: "January 2021 - August 2021",
    details: [
      "Designed user interfaces and experiences using <span style='color: white;'> Figma and Adobe XD. </span>",
      "Developed interactive prototypes and translated designs into functional front-end code with <span style='color: white;'> HTML, CSS, and JavaScript. </span>",
      "Conducted user testing to improve usability and ensure a seamless user experience.",
    ],
  },
  {
    title: "Freelance Web Scraper Developer",
    company_name: "Upwork",
    date: "April 2021 - September 2021",
    details: [
      "Created web scraping solutions using <span style='color: white;'> Python and Selenium. </span>",
      "Automated data collection for clients to gather insights on competitors and market trends.",
      "Ensured data accuracy and compliance with web scraping best practices.",
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

