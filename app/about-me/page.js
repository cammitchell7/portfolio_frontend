import React from "react";
import styles from "./aboutme.module.css";

const aboutMe = () => {
  return (
    <div>
      <p className={styles.textBlock}>
        I am a Clarkson University Graduate that has received a B.S. in Data
        Science with a minor in Computer Science. My educational background has
        equipped me with a strong foundation in statistics and computer science,
        complemented by a determined, analytical mindset.<br></br>
        <br></br> I am deeply passionate about new advancements in artificial
        intelligence and the use of machine learning algorithms as an approach
        to solving problems that revolve around big data.<br></br>
        <br></br> My expertise spans various programming languages, including
        Python, R, and SQL. I&apos;m truly grateful for the educational
        opportunities I&apos;ve had, as they&apos;ve not only refined my
        technical skills but also instilled in me a commitment to apply these
        skills ethically for the betterment of society.<br></br>
        <br></br> I&apos;m excited to connect, collaborate, and explore how data
        driven insights can drive positive change and innovation.
      </p>
    </div>
  );
};

export default aboutMe;
