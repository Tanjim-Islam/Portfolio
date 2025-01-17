import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const educationData = [
  {
    title: "SSC (2017)",
    institution: "Chetona Model Academy",
    location: "Mirpur, Dhaka",
    subject: "Science",
    link: "https://cma.edu.bd/",
  },
  {
    title: "HSC (2019)",
    institution: "Bangladesh International School and College",
    location: "Mohakhali DOHS, Dhaka",
    subject: "Science",
    link: "https://bisc.com.bd/",
  },
  {
    title: "University (2020-2024)",
    institution: "BRAC University",
    location: "Badda, Dhaka",
    subject: "Computer Science and Engineering",
    link: "https://www.bracu.ac.bd/",
  },
];

const EducationCard = ({ education }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={education.title}
      iconStyle={{ background: "#f9c74f", color: "#fff" }}
    >
      <a
        href={education.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Location of ${education.institution}`}
      >
        <h3 className="text-white text-[24px] font-bold">
          {education.institution}
        </h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {education.location}
        </p>
        <p
          className="text-secondary text-[14px] font-semibold"
          style={{ margin: 0 }}
        >
          {education.subject}
        </p>
      </a>
    </VerticalTimelineElement>
  );
};

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p
          className={`${styles.sectionSubText} sectionSubTextLarge text-center`}
        >
          Where I've Studied
        </p>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {educationData.map((education, index) => (
            <EducationCard key={`education-${index}`} education={education} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
