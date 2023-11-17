import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
   return(
      <section className={styles.container}>
         <div className={styles.content}>
         <h1 className={styles.title}>Hi, I'm Manesh</h1>
         <p className={styles.para}>I am a recent computer science graduate actively seeking employment. With a strong work ethic and a passion for coding, I am eager to contribute my skills and knowledge to a dynamic work environment</p>
         <a className={styles.resumeBtn} href="https://drive.google.com/file/d/1go9zc4lOS-b2nBu_xBv4wLXl7ei7afyJ/view?usp=sharing" target="_blank" rel="noopener noreferrer">View Resume</a>
         </div>
         <img src={getImageUrl("hero/heroImage.png")} alt ="Hero" className={styles.heroImg} />
         <div className={styles.topBlur} />
         <div className={styles.bottomBlur} />
      </section>
   )
}