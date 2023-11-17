import React from "react";

import styles from "./Experience.module.css";
import experience from "../../information/experience.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        {experience.map((experienceItem, id) => (
          <div key={id} className={styles.experienceItem}>
            <img
              src={getImageUrl(experienceItem.imageSrc)}
              alt={`${experienceItem.organisation} Logo`}
            />
            <div className={styles.experienceItemDetails}>
              <h3>{experienceItem.role}</h3>
              <h2>{experienceItem.organisation}</h2>
              <p>{`${experienceItem.startDate} - ${experienceItem.endDate}`}</p>
              {experienceItem.experiences.map((experience, id) => (
                <div key={id} className={styles.experienceDetails}>
                  {`- ${experience}`}
                </div>
              ))}
            </div>
            <div className={styles.skillsLearned}>
              {experienceItem.skillsLearned.map((skills, id) => (
                <div key={id} className={styles.skillsLearnedItems}>
                  {skills}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
