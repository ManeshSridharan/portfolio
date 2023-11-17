import React from "react";

import styles from "./Skills.module.css";
import skills from "../../information/skills.json";
import { getImageUrl } from "../../utils";

export const Skills = () => {
  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        <div className={styles.sectionsContainer}>
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Programming Languages</h3>
            <div className={styles.skills}>
              {skills
                .filter((skill) => skill.category === "programmingLanguage")
                .map((skill, id) => {
                  return (
                    <div key={id} className={styles.skill}>
                      <div className={styles.skillImageContainer}>
                        <img
                          src={getImageUrl(skill.imageSrc)}
                          alt={skill.title}
                        />
                      </div>
                      <p>{skill.title}</p>
                    </div>
                  );
                })}
            </div>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Frameworks</h3>
            <div className={styles.skills}>
              {skills
                .filter((skill) => skill.category === "framework")
                .map((skill, id) => {
                  return (
                    <div key={id} className={styles.skill}>
                      <div className={styles.skillImageContainer}>
                        <img
                          src={getImageUrl(skill.imageSrc)}
                          alt={skill.title}
                        />
                      </div>
                      <p>{skill.title}</p>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
