import React from "react";
import "./skills.css";
import htmlImg from "../../assets/skills/html.webp";
import cssImg from "../../assets/skills/css.webp";
import jsImg from "../../assets/skills/js.webp";
import reactImg from "../../assets/skills/reactjs.webp";
import nextImg from "../../assets/skills/nextjs.webp";
import nodejsImg from "../../assets/skills/nodejs.webp";
import nunjucksImg from "../../assets/skills/nunjucks.webp";
import bootstrapImg from "../../assets/skills/bootstrap.webp";
import tailwindImg from "../../assets/skills/tailwind.webp";
import gitImg from "../../assets/skills/git.webp";
import githubImg from "../../assets/skills/github.webp";
import jiraImg from "../../assets/skills/jira.webp";
import bitbucketImg from "../../assets/skills/bitbucket.webp";
import sourcetreeImg from "../../assets/skills/sourcetree.webp";
import reduxImg from "../../assets/skills/redux.webp";

const Skills = () => {
  const skillsData = [
    { img: { src: htmlImg, alt: "html" } },
    { img: { src: cssImg, alt: "css" } },
    { img: { src: jsImg, alt: "js" } },
    { img: { src: reactImg, alt: "reactjs" } },
    { img: { src: nextImg, alt: "nextjs" } },
    { img: { src: reduxImg, alt: "redux" } },
    { img: { src: nodejsImg, alt: "nodejs" } },
    { img: { src: nunjucksImg, alt: "nunjucks" } },
    { img: { src: bootstrapImg, alt: "bootstrap" } },
    { img: { src: tailwindImg, alt: "tailwind css" } },
    { img: { src: gitImg, alt: "git" } },
    { img: { src: githubImg, alt: "gitHub" } },
    { img: { src: jiraImg, alt: "jira" } },
    { img: { src: bitbucketImg, alt: "bitbucket" } },
    { img: { src: sourcetreeImg, alt: "sourcetree" } },
  ];

  // Duplicate for infinite effect
  const loopedSkills = [...skillsData, ...skillsData];

  return (
    <section className="skills" id="skill">
      <div className="skills-wrapper">
        {loopedSkills.map((item, index) => (
          <img
            className="img-fluid"
            src={item.img.src}
            alt={item.img.alt}
            key={index}
            loading="lazy"
            decoding="async"
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
