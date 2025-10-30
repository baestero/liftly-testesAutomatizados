import React from "react";
import styles from "../Helpers/Message.module.css";

const Message = ({ message }) => {
  if (!message) return null;

  return (
    <div className={`${styles.message} animeLeft`}>
      {message.map((msg) => (
        <p className="error" key={msg}>
          {msg}
        </p>
      ))}
    </div>
  );
};

export default Message;
