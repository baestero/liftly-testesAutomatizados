import React from "react";
import styles from "./Feedback.module.css";

const Feedback = ({ children }) => {
  return <div className={`${styles.reps} animeLeft `}>{children}</div>;
};

export default Feedback;
